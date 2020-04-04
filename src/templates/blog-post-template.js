import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import { Content, SectionTitle } from '../components/Utils'
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
      <Content>
        <SectionTitle>Blog Post</SectionTitle>
        <h1>{post.frontmatter.title}</h1>
        <div
          className="row"
          style={{
            fontSize: rhythm(3 / 5),
            fontWeight: 700,
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
