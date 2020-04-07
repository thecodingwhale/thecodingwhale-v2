import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/Template/Layout'
import ArticleTitle from '../components/ArticleTitle/ArticleTitle'

class PageNotFound extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const title = 'Page not found'

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

export default PageNotFound
