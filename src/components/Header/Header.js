import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { useSiteMetadata } from '../../hooks'

const Header = ({ isIndex }) => {
  const { author, url } = useSiteMetadata()

  return (
    <div>
      {(isIndex && (
        <h1 style={{}}>
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
