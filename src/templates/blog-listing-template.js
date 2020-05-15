const _ = require('lodash')
import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'

import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import { Content, SectionTitle } from '../components/Utils'
import { useSiteMetadata } from '../hooks'

const BlogIndex = ({ data, pageContext }) => {
  const { title, description } = useSiteMetadata()
  const { edges } = data.allMarkdownRemark
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout isIndex={true} title={title} description={description}>
      <Content>
        <SectionTitle>
          Page {currentPage} of {numPages}
        </SectionTitle>

        {edges.map(({ node }) => {
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

        <nav role="navigation" aria-label="pagination">
          {!isFirst && (
            <Link
              to={`${currentPage - 1 === 1 ? '/' : '/page/' + prevPage}`}
              rel="prev"
              className="pagination-previous"
            >
              {'<<'} Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <Link
              key={`pagination-number${i + 1}`}
              to={`${i === 0 ? '/' : '/page/' + (i + 1)}`}
              className={`pagination-link ${
                i + 1 === currentPage ? 'is-current' : ''
              }`}
            >
              {i + 1}
            </Link>
          ))}
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
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
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
