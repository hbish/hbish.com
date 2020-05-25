import React from 'react'

import Helmet from 'react-helmet'
import { useSiteMetadata } from '../../hooks'
import { withPrefix } from 'gatsby-link'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

const Layout = ({ children, title, description, socialImage }) => {
  const { author, siteUrl } = useSiteMetadata()
  const metaImage = socialImage != null ? socialImage : author.photo
  const metaImageUrl = siteUrl + withPrefix(metaImage)

  return (
    <div>
      <div className="container">
        <div className={'waterfall float-left'} />
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <link
            rel="webmention"
            href="https://webmention.io/hbish.com/webmention"
          />
          <link rel="pingback" href="https://webmention.io/hbish.com/xmlrpc" />
          <meta name="description" content={description} />
          <meta property="og:site_name" content={title} />
          <meta property="og:image" content={metaImageUrl} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={metaImageUrl} />
        </Helmet>
        <div className="row layout">
          <div className="column column-20">
            <Sidebar />
          </div>
          <div className="column column-80 content">
            {children}
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <script
        data-goatcounter="https://hbish.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      />
    </div>
  )
}

export default Layout
