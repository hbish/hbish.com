import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import styled from 'styled-components'
import { SectionTitle } from '../components'

class AboutPage extends React.Component {
  render() {
    const Content = styled.article`
      grid-column: 2;
      box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
      max-width: 1000px;
      border-radius: 1rem;
      padding: 2rem 3rem;
      background-color: 'white';
    `

    return (
      <Layout location={this.props.location}>
        <Content>
          <SectionTitle>About</SectionTitle>
          <div>
            <h3>The gist</h3>
            <p>
              I'm a Software Engineer at{' '}
              <a href="https://versent.com.au">Versent</a>, where we help
              businesses with big hairy problems like migrating off traditional
              software infrastructures and building out new API capabilities
              using modern technology.
            </p>
            <p>
              I was previously afilliated with{' '}
              <a href="https://www.jpmorgan.com/pages/jpmorgan">J.P Morgan</a>
              {', '}
              <a href="https://www.aciworldwide.com/">ACI Worldwide</a>
              {', and '}
              <a href="https://www.crunchbase.com/company/distra">Distra</a>
            </p>

            <h3>An unlikely start</h3>
            <p>
              I enjoy coding but it wasn't always what I wanted to do. Growing
              up I always wanted to be a mechanic, I loved solving problems and
              taking things apart then putting it back together. But one
              unfortunate event early on in my life changed all that.
            </p>
            <p>
              I'm a right hander. One summer afternoon in 2002, I had an
              accident that severely damage my right arm. It took over 10 hours
              of surgery and more than 100 stitches to just put me back in one
              piece. In the following years, I got 2 additional follow up
              surgeries to help me with my sensations in my arm and fingers. The
              recovery process was hard but for me relearning everything with my
              left hand was harder both mentally and physically. It is at this
              stage in my life I realise that I was probably never going to be a
              mechanic...
            </p>
            <p>
              It is around this time, my mother got me my first computer, a
              Compaq desktop running on Windows ME (yuk I know) to help with my
              homework. The more I used it the more I became intrigued about how
              everything worked, from webpages, email and the awful dial-tone we
              had to listen to just to connect to the WWW.
            </p>
            <p>
              I learned Dreamweaver with some HTML, built my very first website
              on GeoCities and the rest was history. In many ways programming is
              exactly like building and maintaining a car. Coding up a new
              feature is like modifying a car to look or perform better. Finding
              a bug is like disassembling a car and zeroing on the problem.
            </p>
            <p>
              Till this day, I have not gotten 100% of sensation back and I
              probably will never. But I am extremely blessed to have discovered
              the fascinating world of technology and programming. There are not
              many people out there can say they are able to do something they
              enjoy day in and day out as a career.
            </p>
          </div>
        </Content>
      </Layout>
    )
  }
}

export default AboutPage
