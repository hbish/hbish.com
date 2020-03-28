import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { scale, rhythm } from '../../utils/typography'
import { useSiteMetadata } from '../../hooks'

const Header = ({ isIndex }) => {
  const { author, url } = useSiteMetadata()

  if (isIndex) {
    return (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          Hello.
        </Link>
      </h1>
    )
  } else {
    return (
      <h2
        style={{
          marginTop: 0,
          marginBottom: rhythm(1),
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          Ben Shi
        </Link>
      </h2>
    )
  }
}

export default Header
