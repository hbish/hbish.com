import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm, scale } from '../utils/typography'
import { SectionTitle } from '../components'
import styled from 'styled-components'

class BlogIndex extends React.Component {
  render() {
    const Content = styled.div`
      grid-column: 2;
      box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
      border-radius: 1rem;
      padding: 2rem 2rem;
      overflow: hidden;
    `

    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
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
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li
              key="1"
              style={{
                margin: 0,
              }}
            >
              <Link to="/page/2"> Older Posts</Link>
            </li>
          </ul>
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
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
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
            tags
            categories
          }
        }
      }
    }
  }
`
