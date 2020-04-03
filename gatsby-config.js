const siteConfig = require('./config')

module.exports = {
  siteMetadata: {
    title: siteConfig.title,
    author: siteConfig.author,
    description: siteConfig.description,
    siteUrl: siteConfig.url,
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-autolink-headers`,
                  options: {
                    isIconAfterHeader: true,
                  },
                },
              ],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-feed`,
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        output: '/sitemap.xml',
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => ({
            url: `${site.siteMetadata.siteUrl}${edge.node.path}`,
            changefreq: 'daily',
            priority: 0.7,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ben Shi`,
        short_name: `hbish`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#103FEA`,
        display: `minimal-ui`,
        icon: `static/favicon-32x32.png`,
      },
    },
    {
      resolve: `gatsby-plugin-amplitude-analytics`,
      options: {
        apiKey: siteConfig.analytics.amplitude,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: siteConfig.analytics.google,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
