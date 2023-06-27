# Sitemap to IndexNow

## Overview

This code will read a remote sitemap index file, process it and send the results to [Bing / IndexNow](https://www.bing.com/indexnow) to be added to the search engine.

## Customisation

In `package.json`, edit the following line:

```
 "seo:index-now:custom": "HOST=www.yourdomain.tld SITEMAP_PATH=/sitemap.xml KEY=ad8******90ab node scripts/index-now.mjs"
```

Add your `HOST`, `SITEMAP_PATH` and IndexNow `KEY`

If you wish to submit to a different search engine, you can also add `INDEX_NOW_URL=https://notbing.com/indexnow`

## Run

Install the dependencies:

```
npm install
```

Submit your content to Bing/IndexNow

```
npm run seo:index-now:custom
```

It will send a separate submission to Bing for each sitemap that is found in the sitemap index file.

## Can't add the key file at root?

If you cannot add the key file in the root directory, but can add redirects,

Our [Scroll Viewport](https://www.k15t.com/products/scroll-for-confluence) based help centre does not allow static files at root, but does allow them elsewhere.

We added the key file attached to a Confluence space home page, then added the `/attachments` macro onto a page with `*txt` file pattern so that the file was published by Scroll Viewport.

We're using the "Hero Layout" template for our "Content Source" pages, sop the actual macro never appears in the resulting page.

Upon publish with Scroll Viewport, my attachment that was published in Confluence here:

```
https://dsapps.atlassian.net/wiki/download/attachments/4851237027/ad82765dd09f4b659764deea744d90eb.txt
```

was available in my ScrollViewport site at:

```
https://help.dsapps.dev/__attachments/4851237027/ad82765dd09f4b659764deea744d90eb.txt
```

So all that was required was a permanent redirect–

From:

```
https://help.dsapps.dev/ad82765dd09f4b659764deea744d90eb.txt
```

To:

```
https://help.dsapps.dev/__attachments/4851237027/ad82765dd09f4b659764deea744d90eb.txt
```

THen a republish.
