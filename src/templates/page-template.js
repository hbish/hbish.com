import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
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
      <div className={'content'}>
        <div className={'section-title'}>{frontmatter.title}</div>
        <article dangerouslySetInnerHTML={{ __html: pageBody }} />
      </div>
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
