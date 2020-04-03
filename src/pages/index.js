import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio/Bio'
import Layout from '../components/Layout'
import { SectionTitle, Content } from '../components/Utils'
import styled from 'styled-components'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    return (
      <Layout isIndex={true} title={siteTitle} description={siteDescription}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio />

        <Content>
          <SectionTitle>Recent Posts</SectionTitle>
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
          <nav role="navigation" aria-label="pagination">
            <Link to="/page/2" rel="prev" className="pagination-previous">
              {'<<'} Older Posts
            </Link>
          </nav>
        </Content>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      buildTime(formatString: "DD.MM.YYYY")
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
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
            type
            tags
            categories
          }
        }
      }
    }
  }
`
