import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import Footer from '../Footer'

import Helmet from 'react-helmet'
import { useSiteMetadata } from '../../hooks'
import Header from '../Header'
import { withPrefix } from 'gatsby-link'

const Layout = ({
  isIndex = false,
  children,
  title,
  description,
  socialImage,
}) => {
  const { author, siteUrl } = useSiteMetadata()
  const metaImage = socialImage != null ? socialImage : author.photo
  const metaImageUrl = siteUrl + withPrefix(metaImage)

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(34),
        padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
      }}
    >
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

      <Header isIndex={isIndex} />
      {children}

      <Footer />
    </div>
  )
}

export default Layout
