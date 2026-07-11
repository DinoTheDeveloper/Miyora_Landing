import { Helmet } from 'react-helmet-async'

// TODO: This site is client-rendered only, so these tags exist in the DOM
// after JS runs, not in the raw HTML response. Googlebot handles that fine,
// but crawlers that don't execute JS (e.g. link-preview bots for Slack,
// iMessage, Facebook) will see generic homepage metadata on deep links like
// /services/event-planning. If rich social previews per page ever matter,
// add prerendering (e.g. vite-plugin-prerender) or move to an SSG framework.
const SITE_URL = 'https://miyoracollective.co.za'
const DEFAULT_IMAGE = `${SITE_URL}/android-chrome-512x512.png`

type SEOProps = {
  title: string
  description: string
  path: string
  image?: string
  jsonLd?: object
}

function SEO({ title, description, path, image = DEFAULT_IMAGE, jsonLd }: SEOProps) {
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Miyōra Collective" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}

export default SEO
