import React from 'react'
import { graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import { Content, SectionTitle } from '../components/Utils'
import { useSiteMetadata } from '../hooks'

const PageTemplate = ({ data }) => {
  const { title: siteTitle } = useSiteMetadata()
  const { html: pageBody, frontmatter } = data.markdownRemark
  const siteDescription = pageBody.excerpt

  return (
    <Layout
      title={`${frontmatter.title} | ${siteTitle}`}
      description={siteDescription}
    >
      <Content>
        <SectionTitle>{frontmatter.title}</SectionTitle>
        <article dangerouslySetInnerHTML={{ __html: pageBody }} />
        <hr
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
          }}
        />

        <div className="row">
          <div
            className="column is-full"
            style={{
              ...scale(-1 / 6),
            }}
          >
            <Bio />
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        categories
        tags
      }
    }
  }
`
