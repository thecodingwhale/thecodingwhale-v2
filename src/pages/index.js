import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/Template/Layout'
import ArticleList from '../components/ArticleList/ArticleList'
import ArticleDashedLine from '../components/ArticleDashedLine/ArticleDashedLine'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulPost.edges')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Layout>
        <Helmet title={`Welcome to ${siteTitle}`} />
        {posts.map((post, index) => {
          return (
            <React.Fragment key={post.node.id}>
              <ArticleList {...post.node} />
              {posts.length !== index + 1 && <ArticleDashedLine />}
            </React.Fragment>
          )
        })}
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          metaDescription {
            childMarkdownRemark {
              html
            }
          }
          tags {
            title
            slug
          }
        }
      }
    }
  }
`
