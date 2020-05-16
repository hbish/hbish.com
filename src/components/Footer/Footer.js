import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

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
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div>
              <label>theme</label>
              <select
                className={'select-small'}
                id="themeId"
                onChange={e => toggleTheme(e.target.value)}
              >
                <option value="light">light</option>
                <option value="dark">dark</option>
              </select>
            </div>
          )}
        </ThemeToggler>
        &copy; 2010 - {data.site.year} <Link to="/"> - Ben Shi</Link>
        <br />
        :: <Link to="/versions/">v8</Link> :: built on {data.site.buildTime}
        <br />
      </footer>
    )}
  />
)

export default Footer
