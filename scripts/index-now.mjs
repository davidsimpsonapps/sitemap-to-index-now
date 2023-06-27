/* eslint-disable no-console */
import fetch from "cross-fetch";
import convert from "xml-js";

const host = process.env.HOST || "www.example.tld";
const indexNowApiKey = process.env.KEY || "e667****2eb7";
const sitemapPath = process.env.SITEMAP_PATH || "/sitemap/sitemap-index.xml";
const sitemapIndexUrl = `https://${host}${sitemapPath}`;
const keyLocation = `https://${host}/${indexNowApiKey}.txt`; // the key location has to be in the root folder
const indexNowUrl =
  process.env.INDEX_NOW_URL || "https://www.bing.com/indexnow";

const readRemoteSitemapXml = async (url) => {
  console.info("Reading remote sitemap", url);
  const res = await fetch(url);
  if (res.status >= 400) throw new Error("Bad response from server");
  return res.text();
};

/**
 * Parse a sitemap.xml file & get an array of URLs
 *
 * For sitemap index format:
 *   <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
 *     <sitemap>
 *       <loc>https://www.dsapps.dev/sitemap/sitemap-0.xml</loc>
 *     </sitemap>
 *     ...
 *   </sitemapindex>
 *
 * For normal sitemap format:
 *   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
 *     <url>
 *       <loc>https://www.dsapps.dev/contact/</loc>
 *     </url>
 *     ...
 *   </urlset>
 *
 * @param {*} xml
 * @returns
 */
const getUrlListFromXmlText = (xml) => {
  const result = convert.xml2json(xml, { compact: true, spaces: 4 });
  const siteMapJson = JSON.parse(result);

  // console.log('siteMapJson', siteMapJson);

  const listOfUrls = siteMapJson.sitemapindex
    ? siteMapJson.sitemapindex.sitemap
    : siteMapJson.urlset.url;

  // could just be one item, so xml2json will not convert it to an array
  return Array.isArray(listOfUrls)
    ? listOfUrls.map((item) => item.loc._text)
    : [listOfUrls.loc._text];
};

/**
 * POST https://www.bing.com/indexnow HTTP/1.1
 * Content-Type: application/json; charset=utf-8
 * {
 *   "host": "www.example.org",
 *   "key": "e6677129dd464fc4a5439591f2ab2eb7",
 *   "keyLocation": "https://www.example.org/e6677129dd464fc4a5439591f2ab2eb7.txt",
 *   "urlList": [
 *     "https://www.example.org/url1",
 *     "https://www.example.org/folder/url2"
 *   ]
 * }
 */
const submitToIndexNow = (payload) => {
  console.log(payload);
  fetch(indexNowUrl, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((response) => {
    console.log(
      `Submitted to IndexNow: ${indexNowUrl} • HTTP Response Code: ${response.status}`
    );
  });
};

(async () => {
  try {
    // read the sitemap index file
    const sitemapIndexText = await readRemoteSitemapXml(sitemapIndexUrl);
    const sitemapUrlList = getUrlListFromXmlText(sitemapIndexText);

    console.log("Number of sitemaps: ", sitemapUrlList.length);

    // for each sitemap found in the sitemap index file,
    // read the sitemap & submit to bing / IndexNow
    sitemapUrlList.forEach((sitemapUrl) => {
      readRemoteSitemapXml(sitemapUrl).then((sitemapXmlAsText) => {
        // get an array of just URLs from the sitemap text
        const urlList = getUrlListFromXmlText(sitemapXmlAsText);

        console.log("Number of URLs: ", urlList.length);

        // the payload in IndexNow format
        const payload = {
          host,
          key: indexNowApiKey,
          keyLocation,
          urlList,
        };

        submitToIndexNow(payload);
      });
    });
  } catch (err) {
    console.error(err);
  }
})();
