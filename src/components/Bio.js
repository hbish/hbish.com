import React from 'react'
import { Link } from 'gatsby'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { scale, rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
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
          <img
            src={profilePic}
            alt={`Ben Shi`}
            style={{
              marginBottom: 0,
              width: rhythm(10),
              borderRadius: rhythm(1),
            }}
          />
        </div>
        <div>
          <p>
            I'm <strong>Ben Shi</strong>, a Sydney-based Full Stack Software
            Engineer specialising in micro-services and API development. This is
            a playground for me to document my learnings and experiences as a
            technologist.
          </p>
          <p>
            You can find out a little bit more about me over{' '}
            <Link to="/about/">here</Link>.
          </p>
          <span
            style={{
              ...scale(-1 / 6),
            }}
          >
            <strong>Contact:</strong> [<a href="mailto:ben@hbish.com">email</a>{' '}
            | <a href="http://twitter.com/hbish/">twitter</a>|{' '}
            <a href="https://au.linkedin.com/in/benshi/">linkedin</a>]
          </span>
        </div>
      </div>
    )
  }
}

export default Bio
