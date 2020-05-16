import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const years = new Map()
    posts.forEach(({ node }) => {
      if (years.get(get(node, 'frontmatter.year'))) {
        years.set(
          get(node, 'frontmatter.year'),
          years.get(get(node, 'frontmatter.year')).concat(node)
        )
      } else {
        years.set(get(node, 'frontmatter.year'), [node])
      }
    })

    return (
      <Layout title={siteTitle} description={siteDescription}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div className={'content'}>
          <div className={'section-title'}>Posts</div>
          {Array.from(years).map(([year, nodes]) => {
            return nodes.map((node, index) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  {index === 0 && <h3>{year}</h3>}
                  <div>
                    <strong>{node.frontmatter.date}</strong> ::{' '}
                    <Link to={node.fields.slug}>{title}</Link>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  </div>
                </div>
              )
            })
          })}
        </div>
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
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            year: date(formatString: "YYYY")
            date(formatString: "MMM DD")
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
