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

If you cannot add the key file in the root directory, but can add redirects.

Set a permanent redirect from `/ad8******90ab.txt` to `/path/to/ad8******90ab.txt`

### Example using Scroll Viewport

We use [Scroll Viewport](https://www.k15t.com/products/scroll-for-confluence) to publish content from a Confluence wiki in an easy to use format.

Our Scroll Viewport based help centre does not allow static files at root, but does allow them elsewhere.

We added the key file attached to a Confluence space home page, then added the `/attachments` macro onto a page with `*txt` file pattern so that the file was published by Scroll Viewport.

We're using the "Hero Layout" template for our "Content Source" pages, sop the actual macro never appears in the resulting page.

Upon publish with Scroll Viewport, my attachment that was published in Confluence here:

```
https://dsapps.atlassian.net/wiki/download/attachments/4851237027/ad82765dd09f4b659764deea744d90eb.txt
```

was available in my Scroll Viewport site at:

```
https://help.dsapps.dev/__attachments/4851237027/ad82765dd09f4b659764deea744d90eb.txt
```

So all that was required was a permanent redirect –

From:

```
https://help.dsapps.dev/ad82765dd09f4b659764deea744d90eb.txt
```

To:

```
https://help.dsapps.dev/__attachments/4851237027/ad82765dd09f4b659764deea744d90eb.txt
```

Then a republish.

# Publishing

When you run `npm run seo:index-now:custom` there will be some output in the terminal.

Here's an example. Look for `Submitted to IndexNow: https://www.bing.com/indexnow • HTTP Response Code: 200` at the end for a successful outcome:

```
Reading remote sitemap https://help.dsapps.dev/sitemap.xml
Number of sitemaps:  10
Reading remote sitemap https://help.dsapps.dev/google-analytics-in-confluence/sitemap.xml
Reading remote sitemap https://help.dsapps.dev/google-analytics-in-jira/sitemap.xml
Reading remote sitemap https://help.dsapps.dev/bi-dashboards-in-confluence/sitemap.xml
Reading remote sitemap https://help.dsapps.dev/forms-surveys-confluence/sitemap.xml
Reading remote sitemap https://help.dsapps.dev/cloud-macros-bitbucket-confluence/sitemap.xml
Reading remote sitemap https://help.dsapps.dev/chemistry-toolkit-confluence/sitemap.xml
Reading remote sitemap https://help.dsapps.dev/github-gists-confluence/sitemap.xml
Reading remote sitemap https://help.dsapps.dev/atlassian-apps-shared-documentation/sitemap.xml
Reading remote sitemap https://help.dsapps.dev/looker-studio-in-confluence/sitemap.xml
Reading remote sitemap https://help.dsapps.dev/table-from-csv-confluence/sitemap.xml
Number of URLs:  47
{
  host: 'help.dsapps.dev',
  key: 'ad********************0eb',
  keyLocation: 'https://help.dsapps.dev/ad********************0eb.txt',
  urlList: [
    'https://help.dsapps.dev/google-analytics-in-confluence/where-is-the-data-for-the-app-stored-universal-ana',
    'https://help.dsapps.dev/google-analytics-in-confluence/analytics-reporting-features-universal-analytics',
    'https://help.dsapps.dev/google-analytics-in-confluence/configuration-confluence-server-version-1-x-only',
    'https://help.dsapps.dev/google-analytics-in-confluence/space-analytics',
    'https://help.dsapps.dev/google-analytics-in-confluence/configuration-data-collection-universal-analytics',
    'https://help.dsapps.dev/google-analytics-in-confluence/google-analytics-in-confluence-4-an-update-guide',
    'https://help.dsapps.dev/google-analytics-in-confluence/other-faqs',
    'https://help.dsapps.dev/google-analytics-in-confluence/legacy-version-configuration-until-june-2020',
    'https://help.dsapps.dev/google-analytics-in-confluence/revoking-google-analytics-access',
    'https://help.dsapps.dev/google-analytics-in-confluence/what-data-is-stored-by-the-app-and-where',
    'https://help.dsapps.dev/google-analytics-in-confluence/custom-dimensions',
    'https://help.dsapps.dev/google-analytics-in-confluence/custom-reports-in-google-analytics',
    'https://help.dsapps.dev/google-analytics-in-confluence/how-do-i-know-that-google-analytics-is-tracking-my',
    'https://help.dsapps.dev/google-analytics-in-confluence/content-analytics',
    'https://help.dsapps.dev/google-analytics-in-confluence/migrating-between-server-data-center-and-cloud',
    'https://help.dsapps.dev/google-analytics-in-confluence/the-app-displays-an-app-is-not-responding-message',
    'https://help.dsapps.dev/google-analytics-in-confluence/configuration-data-collection',
    'https://help.dsapps.dev/google-analytics-in-confluence/changelog',
    'https://help.dsapps.dev/google-analytics-in-confluence/creating-groups-for-use-in-confluence',
    'https://help.dsapps.dev/google-analytics-in-confluence/ga4-analytics-reporting-features',
    'https://help.dsapps.dev/google-analytics-in-confluence/',
    'https://help.dsapps.dev/google-analytics-in-confluence/how-do-i-update-the-app',
    'https://help.dsapps.dev/google-analytics-in-confluence/configuration-reporting-universal-analytics',
    'https://help.dsapps.dev/google-analytics-in-confluence/legacy-version-custom-reports-in-google-analytics',
    'https://help.dsapps.dev/google-analytics-in-confluence/some-of-my-safari-users-are-not-being-tracked',
    'https://help.dsapps.dev/google-analytics-in-confluence/my-company-does-not-use-google-workspace-now-what',
    'https://help.dsapps.dev/google-analytics-in-confluence/configuration-confluence-server',
    'https://help.dsapps.dev/google-analytics-in-confluence/google-analytics-reporting-for-anonymous-users',
    'https://help.dsapps.dev/google-analytics-in-confluence/google-analytics-4-migration-guide',
    'https://help.dsapps.dev/google-analytics-in-confluence/faqs-troubleshooting',
    'https://help.dsapps.dev/google-analytics-in-confluence/people-analytics',
    'https://help.dsapps.dev/google-analytics-in-confluence/how-does-attachment-tracking-work',
    'https://help.dsapps.dev/google-analytics-in-confluence/getting-started',
    'https://help.dsapps.dev/google-analytics-in-confluence/configuration-overview',
    'https://help.dsapps.dev/google-analytics-in-confluence/google-analytics-in-confluence-server-data-center',
    'https://help.dsapps.dev/google-analytics-in-confluence/things-that-don-t-work',
    'https://help.dsapps.dev/google-analytics-in-confluence/what-data-do-we-collect-about-your-confluence-inst',
    'https://help.dsapps.dev/google-analytics-in-confluence/custom-dimensions-used-for-data-collection',
    'https://help.dsapps.dev/google-analytics-in-confluence/google-analytics-in-confluence-feature-matrix-clou',
    'https://help.dsapps.dev/google-analytics-in-confluence/caching-of-space-and-user-data-in-your-browser',
    'https://help.dsapps.dev/google-analytics-in-confluence/configuration-reporting',
    'https://help.dsapps.dev/google-analytics-in-confluence/can-we-obtain-keyword-data-for-page-searches-in-co',
    'https://help.dsapps.dev/google-analytics-in-confluence/google-analytics-in-confluence-previous-version',
    'https://help.dsapps.dev/google-analytics-in-confluence/analytics-overview',
    'https://help.dsapps.dev/google-analytics-in-confluence/can-you-help-me-with-my-vicroads-disability-parkin',
    'https://help.dsapps.dev/google-analytics-in-confluence/configuration-overview-universal-analytics',
    'https://help.dsapps.dev/google-analytics-in-confluence/what-message-does-the-app-display-in-the-footer-of'
  ]
}
Number of URLs:  25
{
  host: 'help.dsapps.dev',
  key: 'ad********************0eb',
  keyLocation: 'https://help.dsapps.dev/ad********************0eb.txt',
  urlList: [
    'https://help.dsapps.dev/bi-dashboards-in-confluence/migrating-between-server-data-center-and-cloud',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/qlik',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/tableau-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/mode-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/domo-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/microsoft-power-bi-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/looker-studio-google-data-studio-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/holistics-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/trevor-io',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/mongodb-charts-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/datawrapper-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/business-intelligence-dashboards-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/metabase-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/looker-embed-integrations-advanced-configuration',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/cumul-io-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/looker-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/supported-domain-names',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/sigma-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/geckoboard-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/knowi-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/datapane-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/gooddata-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/cluvio-in-confluence',
    'https://help.dsapps.dev/bi-dashboards-in-confluence/zoho-analytics-in-confluence'
  ]
}
Number of URLs:  7
{
  host: 'help.dsapps.dev',
  key: 'ad********************0eb',
  keyLocation: 'https://help.dsapps.dev/ad********************0eb.txt',
  urlList: [
    'https://help.dsapps.dev/chemistry-toolkit-confluence/3d-molecule-macro-examples',
    'https://help.dsapps.dev/chemistry-toolkit-confluence/migrating-between-confluence-server-data-center-an',
    'https://help.dsapps.dev/chemistry-toolkit-confluence/chemistry-toolkit-macro-examples',
    'https://help.dsapps.dev/chemistry-toolkit-confluence/table-from-csv-with-rendering-macro-with-2d-chemic',
    'https://help.dsapps.dev/chemistry-toolkit-confluence/3d-molecule-macro-examples-using-attached-mol-file',
    'https://help.dsapps.dev/chemistry-toolkit-confluence/smiles-2d-molecular-structure-macro-examples',
    'https://help.dsapps.dev/chemistry-toolkit-confluence/'
  ]
}
Number of URLs:  22
{
  host: 'help.dsapps.dev',
  key: 'ad********************0eb',
  keyLocation: 'https://help.dsapps.dev/ad********************0eb.txt',
  urlList: [
    'https://help.dsapps.dev/forms-surveys-confluence/forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/surveyplanet-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/',
    'https://help.dsapps.dev/forms-surveys-confluence/wufoo-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/workforms-by-monday-com-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/zoho-forms-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/surveysparrow-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/formstack-forms-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/alchemer-formerly-surveygizmo-forms-surveys-in-con',
    'https://help.dsapps.dev/forms-surveys-confluence/formsite-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/forms-app-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/zoho-survey-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/surveymonkey-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/jotform-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/hubspot-forms-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/cognito-forms-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/microsoft-forms-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/tally-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/mightyforms-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/google-forms-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/typeform-forms-surveys-in-confluence',
    'https://help.dsapps.dev/forms-surveys-confluence/getfeedback-forms-surveys-in-confluence'
  ]
}
Number of URLs:  27
{
  host: 'help.dsapps.dev',
  key: 'ad********************0eb',
  keyLocation: 'https://help.dsapps.dev/ad********************0eb.txt',
  urlList: [
    'https://help.dsapps.dev/google-analytics-in-jira/creating-groups-for-use-in-jira',
    'https://help.dsapps.dev/google-analytics-in-jira/things-that-don-t-work',
    'https://help.dsapps.dev/google-analytics-in-jira/people-analytics',
    'https://help.dsapps.dev/google-analytics-in-jira/what-data-do-we-collect-about-your-jira-instance',
    'https://help.dsapps.dev/google-analytics-in-jira/custom-dimensions',
    'https://help.dsapps.dev/google-analytics-in-jira/custom-dimensions-used-for-data-collection',
    'https://help.dsapps.dev/google-analytics-in-jira/analytics-overview',
    'https://help.dsapps.dev/google-analytics-in-jira/',
    'https://help.dsapps.dev/google-analytics-in-jira/faqs-troubleshooting',
    'https://help.dsapps.dev/google-analytics-in-jira/caching-of-project-and-user-data-in-your-browser',
    'https://help.dsapps.dev/google-analytics-in-jira/how-we-use-the-google-analytics-user',
    'https://help.dsapps.dev/google-analytics-in-jira/ga4-analytics-reporting-features',
    'https://help.dsapps.dev/google-analytics-in-jira/analytics-reporting-features',
    'https://help.dsapps.dev/google-analytics-in-jira/configuration-overview-4-0-ac',
    'https://help.dsapps.dev/google-analytics-in-jira/google-analytics-in-jira-4-0-ac-an-update-guide',
    'https://help.dsapps.dev/google-analytics-in-jira/configuration-data-collection-1',
    'https://help.dsapps.dev/google-analytics-in-jira/google-analytics-in-jira-update-guide',
    'https://help.dsapps.dev/google-analytics-in-jira/configuration-reporting-1',
    'https://help.dsapps.dev/google-analytics-in-jira/configuration-reporting',
    'https://help.dsapps.dev/google-analytics-in-jira/project-analytics',
    'https://help.dsapps.dev/google-analytics-in-jira/google-analytics-in-jira-previous-version',
    'https://help.dsapps.dev/google-analytics-in-jira/configuration-data-collection',
    'https://help.dsapps.dev/google-analytics-in-jira/what-data-is-stored-by-the-app-and-where',
    'https://help.dsapps.dev/google-analytics-in-jira/revoking-google-analytics-access',
    'https://help.dsapps.dev/google-analytics-in-jira/google-analytics-4-migration-guide',
    'https://help.dsapps.dev/google-analytics-in-jira/configuration-overview',
    'https://help.dsapps.dev/google-analytics-in-jira/issue-analytics'
  ]
}
Number of URLs:  14
{
  host: 'help.dsapps.dev',
  key: 'ad********************0eb',
  keyLocation: 'https://help.dsapps.dev/ad********************0eb.txt',
  urlList: [
    'https://help.dsapps.dev/looker-studio-in-confluence/example-report-incorrect-url-web-address',
    'https://help.dsapps.dev/looker-studio-in-confluence/example-report-belgium-covid-19-dashboard',
    'https://help.dsapps.dev/looker-studio-in-confluence/faqs',
    'https://help.dsapps.dev/looker-studio-in-confluence/example-report-google-analytics-behaviors',
    'https://help.dsapps.dev/looker-studio-in-confluence/introduction',
    'https://help.dsapps.dev/looker-studio-in-confluence/valid-looker-studio-macro-reports',
    'https://help.dsapps.dev/looker-studio-in-confluence/example-report-marvel-vs-dc',
    'https://help.dsapps.dev/looker-studio-in-confluence/example-report-the-big-mac-index',
    'https://help.dsapps.dev/looker-studio-in-confluence/looker-studio-doesn-t-work-with-new-urls',
    'https://help.dsapps.dev/looker-studio-in-confluence/invalid-looker-studio-macro-reports',
    'https://help.dsapps.dev/looker-studio-in-confluence/example-report-report-does-not-exist',
    'https://help.dsapps.dev/looker-studio-in-confluence/',
    'https://help.dsapps.dev/looker-studio-in-confluence/example-report-google-analytics-acquisition',
    'https://help.dsapps.dev/looker-studio-in-confluence/example-report-embed-not-enabled'
  ]
}
Number of URLs:  3
{
  host: 'help.dsapps.dev',
  key: 'ad********************0eb',
  keyLocation: 'https://help.dsapps.dev/ad********************0eb.txt',
  urlList: [
    'https://help.dsapps.dev/table-from-csv-confluence/introduction',
    'https://help.dsapps.dev/table-from-csv-confluence/',
    'https://help.dsapps.dev/table-from-csv-confluence/features'
  ]
}
Number of URLs:  4
{
  host: 'help.dsapps.dev',
  key: 'ad********************0eb',
  keyLocation: 'https://help.dsapps.dev/ad********************0eb.txt',
  urlList: [
    'https://help.dsapps.dev/github-gists-confluence/example-csv',
    'https://help.dsapps.dev/github-gists-confluence/migrating-between-server-data-center-and-cloud',
    'https://help.dsapps.dev/github-gists-confluence/github-gists-in-confluence',
    'https://help.dsapps.dev/github-gists-confluence/'
  ]
}
Number of URLs:  8
{
  host: 'help.dsapps.dev',
  key: 'ad********************0eb',
  keyLocation: 'https://help.dsapps.dev/ad********************0eb.txt',
  urlList: [
    'https://help.dsapps.dev/cloud-macros-bitbucket-confluence/bitbucket-commit-macro',
    'https://help.dsapps.dev/cloud-macros-bitbucket-confluence/bitbucket-issues-macro',
    'https://help.dsapps.dev/cloud-macros-bitbucket-confluence/bitbucket-readme-md-macro',
    'https://help.dsapps.dev/cloud-macros-bitbucket-confluence/examples-of-all-macros',
    'https://help.dsapps.dev/cloud-macros-bitbucket-confluence/bitbucket-snippets-macro',
    'https://help.dsapps.dev/cloud-macros-bitbucket-confluence/test-readme-macro-for-other-file-types',
    'https://help.dsapps.dev/cloud-macros-bitbucket-confluence/',
    'https://help.dsapps.dev/cloud-macros-bitbucket-confluence/bitbucket-commits-list-macro'
  ]
}
Number of URLs:  2
{
  host: 'help.dsapps.dev',
  key: 'ad********************0eb',
  keyLocation: 'https://help.dsapps.dev/ad********************0eb.txt',
  urlList: [
    'https://help.dsapps.dev/atlassian-apps-shared-documentation/',
    'https://help.dsapps.dev/atlassian-apps-shared-documentation/we-ran-into-trouble-hiccup'
  ]
}
Submitted to IndexNow: https://www.bing.com/indexnow • HTTP Response Code: 200
Submitted to IndexNow: https://www.bing.com/indexnow • HTTP Response Code: 200
Submitted to IndexNow: https://www.bing.com/indexnow • HTTP Response Code: 200
Submitted to IndexNow: https://www.bing.com/indexnow • HTTP Response Code: 200
Submitted to IndexNow: https://www.bing.com/indexnow • HTTP Response Code: 200
Submitted to IndexNow: https://www.bing.com/indexnow • HTTP Response Code: 200
Submitted to IndexNow: https://www.bing.com/indexnow • HTTP Response Code: 200
Submitted to IndexNow: https://www.bing.com/indexnow • HTTP Response Code: 200
Submitted to IndexNow: https://www.bing.com/indexnow • HTTP Response Code: 200
Submitted to IndexNow: https://www.bing.com/indexnow • HTTP Response Code: 200
```
