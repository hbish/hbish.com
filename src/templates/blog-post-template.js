import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import { useSiteMetadata } from '../hooks'

const BlogPostTemplate = ({ data, pageContext }) => {
  const { title: siteTitle } = useSiteMetadata()
  const post = data.markdownRemark
  const { previous, next } = pageContext

  useEffect(() => {
    const deckdeckgoHighlightCodeLoader = require('@deckdeckgo/highlight-code/dist/loader')
    deckdeckgoHighlightCodeLoader.defineCustomElements(window).catch(e => {
      console.log(e)
    })
  })

  return (
    <Layout
      title={`${post.frontmatter.title} | ${siteTitle}`}
      description={post.excerpt}
    >
      <div className={'content'}>
        <div className={'section-title'}>Blog Post</div>
        <div>{post.frontmatter.date}</div>
        <h1>{post.frontmatter.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: post.html }} />

        <div style={{ marginTop: '1rem' }}>
          {previous && (
            <span>
              <strong>{'prev: '}</strong>
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.title}
              </Link>
            </span>
          )}
          <br />
          {next && (
            <span>
              <strong>{'next: '}</strong>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </Link>
            </span>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
