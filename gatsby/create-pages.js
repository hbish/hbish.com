const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // 404 - Not Found
  createPage({
    path: '/404',
    component: path.resolve('./src/templates/not-found-template.js'),
  })

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post-template.js')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    url
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        _.each(posts, (post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        // Create blog post lists
        const postsPerPage = 5
        const numPages = Math.ceil(posts.length / postsPerPage)

        _.times(numPages, i => {
          if (i === 0) return

          createPage({
            path: `/page/${i + 1}`,
            component: path.resolve('./src/templates/blog-listing-template.js'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          })
        })
      })
    )
  })
}

module.exports = createPages
