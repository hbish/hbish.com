import React from 'react'
import { Link } from 'gatsby'

import Footer from '../Footer'

import Helmet from 'react-helmet'
import { useSiteMetadata } from '../../hooks'
import Header from '../Header'
import { withPrefix } from 'gatsby-link'
import Bio from '../Bio'

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
    <div className={'container'}>
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

      {/*<Header isIndex={isIndex} />*/}
      <div className={'row'}>
        <div className={'column column-20'}>
          <Bio />
          <Footer />
        </div>
        <div className={'column column-80'}>{children}</div>
      </div>
    </div>
  )
}

export default Layout
