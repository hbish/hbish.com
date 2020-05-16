import React, { useState, useEffect } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const Footer = () => {
  let websiteTheme
  if (typeof window !== `undefined`) {
    websiteTheme = window.__theme
  }

  const [theme, setTheme] = useState(websiteTheme)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
  }, [])

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
          <div>
            <label for={'themeId'}>theme</label>
            <select
              id="themeId"
              defaultValue={theme}
              onChange={e => window.__setPreferredTheme(e.target.value)}
            >
              <option value="light">light</option>
              <option value="dark">dark</option>
            </select>
          </div>
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
