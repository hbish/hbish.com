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
    <div className="sidebar">
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
      </ul>
      <p>
        <a href="mailto:ben@hbish.com">
          <IcEmail />
        </a>{' '}
        <a href="https://twitter.com/hbish/">
          <IcTwitter />
        </a>{' '}
        <a href="https://au.linkedin.com/in/benshi/">
          <IcLinkedin />
        </a>{' '}
        <a href="https://github.com/hbish/">
          <IcGithub />
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default Sidebar
