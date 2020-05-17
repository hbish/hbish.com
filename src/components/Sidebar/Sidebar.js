import React, { useEffect, useState } from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import IcEmail from '../../assets/svg/mail.inline.svg'
import IcTwitter from '../../assets/svg/twitter.inline.svg'
import IcLinkedin from '../../assets/svg/linkedin.inline.svg'
import IcGithub from '../../assets/svg/github.inline.svg'

const Sidebar = ({ data }) => {
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
    <div className="sidebar center">
      <div className={'h-card'}>
        <StaticQuery
          query={graphql`
            query {
              profilePic: file(relativePath: { eq: "profile-pic.png" }) {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          `}
          render={data => (
            <Link to={'/'}>
              <Img
                fluid={data['profilePic'].childImageSharp.fluid}
                alt={`Ben Shi`}
                className={'avatar u-photo'}
              />
            </Link>
          )}
        />
        <hr />
        <a href="https://hbish.com/" className={'p-name u-url'}>
          <strong>Ben Shi</strong>
        </a>
        <p className={'p-note'}>
          👋 I'm a software engineer from Sydney, Australia. This is a
          playground for me to document my learnings and experiences.
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/about/">/about</Link>
            </li>
            <li>
              <Link to="/work/">/work</Link>
            </li>
            <li>
              <Link to="/talks/">/talks</Link>
            </li>
            <li>
              <Link to="/uses/">/uses</Link>
            </li>
            <li>
              <Link to="/notes/">/notes</Link>
            </li>
          </ul>
        </nav>
        <div className={'social'}>
          <a
            href="mailto:ben@hbish.com"
            title={'email ben'}
            rel={'me'}
            className={'u-email'}
          >
            <IcEmail aria-labelledby={'title'} />
          </a>{' '}
          <a href="https://twitter.com/hbish" title={'tweet ben'} rel={'me'}>
            <IcTwitter aria-labelledby={'title'} />
          </a>{' '}
          <a
            href="https://au.linkedin.com/in/benshi"
            title={'connect with ben on linkedin'}
            rel={'me'}
          >
            <IcLinkedin aria-labelledby={'title'} />
          </a>{' '}
          <a
            href="https://github.com/hbish"
            title={'follow ben on github'}
            rel={'me'}
          >
            <IcGithub aria-labelledby={'title'} />
          </a>
        </div>
      </div>
      <div>
        <label htmlFor={'themeId'}>
          theme
          <br />
          <select
            id="themeId"
            value={theme}
            onChange={e => window.__setPreferredTheme(e.target.value)}
          >
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="gruv-light">gruv-light</option>
            <option value="gruv-dark">gruv-dark</option>
          </select>
        </label>
      </div>
      <hr />
    </div>
  )
}

export default Sidebar
