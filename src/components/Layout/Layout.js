import React from 'react'

import Helmet from 'react-helmet'
import { useSiteMetadata } from '../../hooks'
import { withPrefix } from 'gatsby-link'
import Sidebar from '../Sidebar'

const Layout = ({ children, title, description, socialImage }) => {
  const { author, siteUrl } = useSiteMetadata()
  const metaImage = socialImage != null ? socialImage : author.photo
  const metaImageUrl = siteUrl + withPrefix(metaImage)

  return (
    <div className="container">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
      </Helmet>

      <div className="row">
        <div className="column column-20">
          <Sidebar />
        </div>
        <div className="column column-80 content">{children}</div>
      </div>
    </div>
  )
}

export default Layout
