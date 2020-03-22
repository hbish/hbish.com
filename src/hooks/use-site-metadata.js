import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
            }
            siteUrl
            title
            description
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata
