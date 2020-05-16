import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import { useSiteMetadata } from '../../hooks'
import Img from 'gatsby-image'
import Footer from '../Footer'
import IcEmail from '../../assets/svg/mail.inline.svg'
import IcTwitter from '../../assets/svg/twitter.inline.svg'
import IcLinkedin from '../../assets/svg/linkedin.inline.svg'
import IcGithub from '../../assets/svg/github.inline.svg'

const Sidebar = ({ data }) => {
  const { author } = useSiteMetadata()

  return (
    <div className="sidebar center">
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
              style={{ borderRadius: '10rem', marginBottom: '3rem' }}
            />
          </Link>
        )}
      />
      <hr />
      <p>
        👋 I'm a software engineer specialising in microservices and API
        development. This is a playground for me to document my learnings and
        experiences.
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
        <a href="mailto:ben@hbish.com" title={'email ben'}>
          <IcEmail aria-labelledby={'title'} />
        </a>{' '}
        <a href="https://twitter.com/hbish/" title={'tweet ben'}>
          <IcTwitter aria-labelledby={'title'} />
        </a>{' '}
        <a
          href="https://au.linkedin.com/in/benshi/"
          title={'connect with ben on linkedin'}
        >
          <IcLinkedin aria-labelledby={'title'} />
        </a>{' '}
        <a href="https://github.com/hbish/" title={'follow ben on github'}>
          <IcGithub aria-labelledby={'title'} />
        </a>
      </div>
      <hr />
      <Footer />
    </div>
  )
}

export default Sidebar
