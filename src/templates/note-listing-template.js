const _ = require('lodash')
import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'
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
    <Layout title={title} description={description}>
      <div className={'content'}>
        <div className={'section-title'}>Notes</div>
        <p>
          A bunch of random notes that I may or may not refer to in the future.
        </p>
        <div>
          {edges.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div key={node.fields.slug}>
                {node.frontmatter.date} ::{' '}
                <Link to={node.fields.slug}>{title}</Link>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "note" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            categories
            tags
          }
        }
      }
    }
  }
`
