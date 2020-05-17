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
          &copy; 2009 - {data.site.year} <Link to="/"> - Ben Shi</Link>
          <br />
          :: <Link to="/versions/">v8</Link> compiled {data.site.buildTime} ::
          <br />
          <a href="https://xn--sr8hvo.ws/%F0%9F%8D%B7%F0%9F%8E%87%E2%8F%AF/previous">
            ←
          </a>
          🕸💍
          <a href="https://xn--sr8hvo.ws/%F0%9F%8D%B7%F0%9F%8E%87%E2%8F%AF/next">
            →
          </a>
        </footer>
      )}
    />
  )
}

export default Footer
