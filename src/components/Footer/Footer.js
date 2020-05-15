import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

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
      <footer>
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
