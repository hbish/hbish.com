import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import { rhythm, scale } from '../../utils/typography'
import { useSiteMetadata } from '../../hooks'
import Img from 'gatsby-image'

const Bio = ({ data }) => {
  const { author } = useSiteMetadata()

  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2.5),
      }}
    >
      <div
        style={{
          marginRight: rhythm(1),
        }}
      >
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
              style={{
                marginBottom: 0,
                width: rhythm(6),
                borderRadius: rhythm(1),
              }}
            />
          )}
        />
      </div>
      <div>
        <p>
          I'm <strong>Ben Shi</strong>, a Sydney-based software engineer
          specialising in micro-services and API development. This is a
          playground for me to document my learnings and experiences as a
          technologist.
        </p>
        <p>
          You can find out more <Link to="/about/">about</Link> me, my{' '}
          <Link to="/work/">work</Link>, my <Link to="/talks/">talks</Link> and
          what I <Link to="/uses/">use</Link>.
        </p>
        <span
          style={{
            ...scale(-1 / 6),
          }}
        >
          <strong>Contact:</strong> [ <a href="mailto:ben@hbish.com">email</a> |{' '}
          <a href="https://twitter.com/hbish/">twitter</a> |{' '}
          <a href="https://au.linkedin.com/in/benshi/">linkedin</a> |{' '}
          <a href="https://github.com/hbish/">github</a> ]
        </span>
      </div>
    </div>
  )
}

export default Bio
