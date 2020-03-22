import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { SectionTitle, Content } from '../components/Utils'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio />

        <Content>
          <SectionTitle>
            Page {currentPage} of {numPages}
          </SectionTitle>

          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
                key={node.fields.slug}
              >
                <div>
                  <div>
                    <small>{node.frontmatter.date}</small>
                    <div
                      style={{
                        float: 'right',
                      }}
                    >
                      <small>
                        <strong>{node.frontmatter.categories}</strong>
                      </small>
                    </div>
                  </div>
                </div>
                <div>
                  <h3>
                    <Link to={node.fields.slug}>{title}</Link>{' '}
                  </h3>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              </div>
            )
          })}

          <nav
            class="pagination is-centered"
            role="navigation"
            aria-label="pagination"
          >
            {!isFirst && (
              <Link
                to={`${currentPage - 1 === 1 ? '/' : '/page/' + prevPage}`}
                rel="prev"
                className="pagination-previous"
              >
                {'<<'} Previous Page
              </Link>
            )}
            <ul class="pagination-list">
              {Array.from({ length: numPages }, (_, i) => (
                <li key={`pagination-number${i + 1}`}>
                  <Link
                    to={`${i === 0 ? '/' : '/page/' + (i + 1)}`}
                    className={`pagination-link ${
                      i + 1 === currentPage ? 'is-current' : ''
                    }`}
                  >
                    {i + 1}
                  </Link>
                </li>
              ))}
            </ul>
            {!isLast && (
              <Link
                to={'/page/' + nextPage}
                rel="next"
                className="pagination-next"
              >
                Next Page {'>>'}
              </Link>
            )}
          </nav>
        </Content>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            categories
            tags
          }
        }
      }
    }
  }
`
