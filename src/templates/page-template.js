import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { useSiteMetadata } from '../hooks'
import WebmentionReplies from '../components/Webmention/WebmentionFeed'

const PageTemplate = ({ data }) => {
  const { title: siteTitle } = useSiteMetadata()
  const { html: pageBody, frontmatter, fields } = data.markdownRemark
  const siteDescription = pageBody.excerpt

  return (
    <Layout
      title={`${frontmatter.title} | ${siteTitle}`}
      description={siteDescription}
    >
      <div className={'content'}>
        <div className={'section-title'}>{frontmatter.title}</div>
        <article dangerouslySetInnerHTML={{ __html: pageBody }} />

        <hr />

        <div className={'socialize'}>
          <form
            id="comment-form"
            method="get"
            action="https://quill.p3k.io/"
            target="_blank"
          >
            <input type="hidden" name="dontask" value="1" />
            <input type="hidden" name="me" value="https://commentpara.de/" />
            <input
              type="hidden"
              name="reply"
              value={'https://hbish.com' + fields.slug}
            />
          </form>
          <a
            className={'button button-outline button-small'}
            target="_blank"
            href={`https://twitter.com/intent/tweet/?text=My%20thoughts%20on%20${'https://hbish.com' +
              fields.slug}`}
          >
            Tweet this post{' '}
          </a>
          <input
            form="comment-form"
            className={'button button-outline button-small'}
            type="submit"
            value="Write a comment"
          />{' '}
        </div>
        <WebmentionReplies target={'https://hbish.com' + fields.slug} />
      </div>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        categories
        tags
      }
    }
  }
`
