import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/Template/Layout'
import ArticleTitle from '../components/ArticleTitle/ArticleTitle'

class About extends React.Component {
  render() {
    const title = `Hi, I’m Aldren. Nice to meet you.`
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Layout>
        <Helmet title={`${title} |  ${siteTitle}`} />
        <div className="content">
          <ArticleTitle {...{ title: title, type: 'h1' }} />
        </div>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
