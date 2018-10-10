import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { scale, rhythm } from '../utils/typography'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          buildTime(formatString: "DD/MM/YYYY")
        }
      }
    `}
    render={data => (
      <footer
        style={{
          ...scale(-1 / 3),
          display: 'block',
          marginTop: rhythm(1),
          marginBottom: rhythm(2),
          textAlign: 'right',
        }}
      >
        &copy; 2010 - 2018 <Link to="/">Ben Shi</Link> :: v7 :: built with{' '}
        <a href="https://www.gatsbyjs.org">gatsby</a>
        <div>
          <em>site compiled on {data.site.buildTime}</em>
        </div>
      </footer>
    )}
  />
)

export default Footer
