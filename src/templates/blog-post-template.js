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
        <h1>{post.frontmatter.title}</h1>
        <div
          className="row"
          style={{
            marginBottom: '1rem',
          }}
        >
          <div className="column">
            Posted Under: <em>{post.frontmatter.categories}</em>
          </div>
          <div
            className="column"
            style={{
              textAlign: 'right',
            }}
          >
            {post.frontmatter.date}
          </div>
        </div>
        <div className="row">
          <article
            className="column"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>

        <div className="row" style={{ marginTop: '1rem' }}>
          <div className={'column'}>
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
