import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const Footer = () => {
  return (
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
        <footer className={'center'}>
          &copy; 2010 - {data.site.year} <Link to="/"> - Ben Shi</Link>
          <br />
          :: <Link to="/versions/">v8</Link> compiled {data.site.buildTime} ::
          <br />
        </footer>
      )}
    />
  )
}

export default Footer
