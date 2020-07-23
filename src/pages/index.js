import React from 'react'
import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

class BlogIndex extends React.Component {
  render() {
    const siteMetadata = get(this, 'props.data.site.siteMetadata')
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
      <Layout title={siteMetadata.title} description={siteMetadata.description}>
        <Helmet>
          <script type="application/ld+json">
            {`{
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "${siteMetadata.title}",
            "url": "${siteMetadata.siteUrl}",
            "description": "${siteMetadata.description}"
          }`}
          </script>

          <script type="application/ld+json">
            {`{
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "${siteMetadata.title}",
            "url": "${siteMetadata.siteUrl}",
            "description": "${siteMetadata.description}"
          }`}
          </script>
        </Helmet>
        <div className={'content'}>
          <div className={'section-title'}>Posts</div>
          {Array.from(years).map(([year, nodes]) => {
            return nodes.map((node, index) => {
              const title = get(node, 'frontmatter.title') || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  {index === 0 && <h3>{year}</h3>}
                  <div className={'row'}>
                    <div className={'column'}>
                      <Link to={node.fields.slug}>{title}</Link> ::{' '}
                      <strong>{node.frontmatter.date}</strong>
                    </div>
                    <div className={'column column-20 text-right'}>
                      <span className={'time-to-read'}>
                        ~{node.timeToRead} min read
                      </span>
                    </div>
                  </div>
                  <div>
                    <p
                      className={'summary text-justify'}
                      dangerouslySetInnerHTML={{ __html: node.excerpt }}
                    />
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
        siteUrl
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          timeToRead
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
