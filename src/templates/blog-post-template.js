import React from 'react'
import { graphql, Link } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm, scale } from '../utils/typography'
import { Content, SectionTitle } from '../components/Utils'
import '../../static/css/prismjs-theme.css'
import { useSiteMetadata } from '../hooks'

const BlogPostTemplate = ({ data, pageContext }) => {
  const { title: siteTitle } = useSiteMetadata()
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout
      title={`${post.frontmatter.title} | ${siteTitle}`}
      description={post.excerpt}
    >
      <Content>
        <SectionTitle>Blog Post</SectionTitle>
        <h1>{post.frontmatter.title}</h1>
        <div
          className="columns"
          style={{
            fontSize: rhythm(3 / 5),
            fontWeight: 700,
          }}
        >
          <div className="column is-half">
            Posted Under: <em>{post.frontmatter.categories}</em>
          </div>
          <div
            className="column is-half"
            style={{
              textAlign: 'right',
            }}
          >
            {post.frontmatter.date}
          </div>
        </div>
        <div className="columns">
          <article
            className="column"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
        <div className="columns">
          <nav
            className="pagination is-centered column is-small"
            role="navigation"
            aria-label="pagination"
          >
            <ul className="pagination-list">
              {previous && (
                <li className="pagination-previous">
                  <Link to={previous.fields.slug} rel="prev">
                    {'<< ' + previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li className="pagination-next">
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title + ' >>'}
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>

        <hr
          style={{
            marginTop: rhythm(1),
            marginBottom: rhythm(1),
          }}
        />

        <div className="columns">
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
