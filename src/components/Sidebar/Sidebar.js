import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import { useSiteMetadata } from '../../hooks'
import Img from 'gatsby-image'
import Footer from '../Footer'

const Sidebar = ({ data }) => {
  const { author } = useSiteMetadata()

  return (
    <div className="sidebar">
      <StaticQuery
        query={graphql`
          query {
            profilePic: file(relativePath: { eq: "profile-pic.png" }) {
              childImageSharp {
                fluid(maxWidth: 125) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        `}
        render={data => (
          <Img
            fluid={data['profilePic'].childImageSharp.fluid}
            alt={`Ben Shi`}
            style={{}}
          />
        )}
      />
      <p>
        I'm <strong>Ben Shi</strong>, a Sydney-based software engineer
        specialising in micro-services and API development. This is a playground
        for me to document my learnings and experiences as a technologist.
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

      <span>
        <strong>Contact:</strong> [ <a href="mailto:ben@hbish.com">email</a> |{' '}
        <a href="https://twitter.com/hbish/">twitter</a> |{' '}
        <a href="https://au.linkedin.com/in/benshi/">linkedin</a> |{' '}
        <a href="https://github.com/hbish/">github</a> ]
      </span>
      <Footer />
    </div>
  )
}

export default Sidebar
