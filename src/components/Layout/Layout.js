import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../../utils/typography'
import Footer from '../Footer'

import 'font-awesome/css/font-awesome.css'
import '../all.sass'
import Helmet from 'react-helmet'
import { useSiteMetadata } from '../../hooks'
import Header from '../Header'

const Layout = ({ location, children, title, description }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let isIndex = location != null && location.pathname === rootPath
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(36),
        padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
      }}
    >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Header isIndex={isIndex} />
      {children}

      <Footer />
    </div>
  )
}

export default Layout
