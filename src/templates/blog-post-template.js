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
        <article className={'h-entry'}>
          <small>
            🗓 <span className={'dt-published'}>{post.frontmatter.date}</span> ::{' '}
            🕑 {post.timeToRead} min read
          </small>
          <h1 className={'p-name'}>{post.frontmatter.title}</h1>
          <div
            className={'e-content'}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div
            style={{
              display: 'none',
            }}
          >
            <a href={'https://hbish.com/'} className={'p-author h-card'}>
              Ben Shi
            </a>
            <p className={'p-summary'}>{post.excerpt}</p>
            <p className={'u-url'}>{'https://hbish.com' + post.fields.slug}</p>
          </div>
        </article>

        <div style={{ marginTop: '1rem', marginBottom: '5rem' }}>
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
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        categories
        tags
      }
      fields {
        slug
      }
    }
  }
`
