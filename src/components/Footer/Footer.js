import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { scale, rhythm } from '../../utils/typography'

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          buildTime(formatString: "DD/MM/YYYY")
          year: buildTime(formatString: "YYYY")
        }
      }
    `}
    render={data => (
      <footer
        style={{
          ...scale(-3 / 4),
          marginTop: rhythm(0.5),
          textAlign: 'right',
          lineHeight: rhythm(0.75),
        }}
      >
        &copy; 2010 - {data.site.year} <Link to="/">Ben Shi</Link> ::{' '}
        <Link to="/versions/">v7</Link> :: built with{' '}
        <a href="https://www.gatsbyjs.org">GatsbyJS</a>
        <br />
        site compiled on {data.site.buildTime}
      </footer>
    )}
  />
)

export default Footer
