import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { rhythm } from '../utils/typography'

class AboutPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>About</h1>
        <div class="entry">
          <h2>Experience</h2>
          <ul>
            <li>
              Microservice Engineer / Consultant @{' '}
              <a href="https://versent.com.au">Versent Australia</a>
            </li>
            <li>
              Senior Technology Associate @{' '}
              <a href="https://www.jpmorgan.com/pages/jpmorgan">J.P Morgan</a>
            </li>
            <li>
              Quality Assurance Engineer @{' '}
              <a href="https://www.aciworldwide.com/">ACI Worldwide</a>
            </li>
            <li>
              Test Engineer @{' '}
              <a href="https://www.crunchbase.com/company/distra">Distra</a>
            </li>
          </ul>
          <h2>Education</h2>
          <ul>
            <li>
              2008 &#8211; 2012: Bachelor of Engineering (Software), Diploma in
              Engineering Practice @{' '}
              <a href="http://www.uts.edu.au/">
                University of Technology, Sydney
              </a>
            </li>
            <li>
              2012: Innovation, Technology and Entrepreneurship in China @{' '}
              <a href="http://hku.hk">The University of Hong Kong</a>
            </li>
          </ul>
          <h2>Special Achievements</h2>
          <ul>
            <li>
              Winner of JPM Asia Pacific CEO Award (Team Category) 2015, 2016{' '}
            </li>
            <li>
              Winner of Flow Monster Project, J.P. Morgan Technology Graduate
              Training 2013
            </li>
            <li>
              Winner of Telstra/Pollenizer Appiness Hackathon 2013 w/ Poppy [
              <a href="http://exchange.telstra.com.au/2013/06/04/team-poppy-named-winner-of-inaugural-appiness-hackathon/">
                article
              </a>
              , <a href="http://youtu.be/sV8BRsQ0m8g">pitch</a>]
            </li>
          </ul>
          <h2>Interests</h2>
          <ul>
            <li>Web technology</li>
            <li>Financial services</li>
            <li>Mobile technology</li>
            <li>Big data</li>
            <li>Data visualisation</li>
            <li>Blockchain &amp; Cryptocurrency</li>
          </ul>
          <h2>Hobbies</h2>
          <ul>
            <li>Photography</li>
            <li>Reading</li>
            <li>Hiking</li>
            <li>Travelling</li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default AboutPage
