import React from 'react'
import Layout from '../components/Layout'
import { Content, SectionTitle } from '../components/Utils'
import '../utils/prismjs-theme.css'
import { useSiteMetadata } from '../hooks'

const NotFoundTemplate = () => {
  const { title, description } = useSiteMetadata()

  return (
    <Layout title={`Not Found - ${title}`} description={description}>
      <Content>
        <SectionTitle>404 - Not Found</SectionTitle>
        <p>You hit a route that does not exist.</p>
      </Content>
    </Layout>
  )
}

export default NotFoundTemplate
