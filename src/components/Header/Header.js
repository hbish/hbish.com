import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { scale, rhythm } from '../../utils/typography'
import { useSiteMetadata } from '../../hooks'

const Header = ({ isIndex }) => {
  const { author, url } = useSiteMetadata()

  return (
    <div style={{ marginBottom: rhythm(0.5) }}>
      {(isIndex && (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(0.5),
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
      )) || (
        <h2>
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
      )}
      {!isIndex && (
        <Link to={'/'}>
          <small>{'<<'} back home</small>
        </Link>
      )}
    </div>
  )
}

export default Header
