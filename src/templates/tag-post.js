import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/Template/Layout'
import ArticleTitle from '../components/ArticleTitle/ArticleTitle'
import ArticleList from '../components/ArticleList/ArticleList'
import ArticleDashedLine from '../components/ArticleDashedLine/ArticleDashedLine'

const capitalize = s => {
  return s.replace(/(?:^|\s)\S/g, function(a) {
    return a.toUpperCase()
  })
}

class TagPostTemplate extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const tag = get(this.props, 'data.allContentfulTag').edges[0].node
    const posts = get(this.props, 'data.allContentfulPost').edges
    const setTitle = `Posts tag by : "${capitalize(tag.title)}"`
    return (
      <Layout>
        <Helmet title={`${setTitle} | ${siteTitle}`} />
        <div className="content">
          <ArticleTitle {...{ title: setTitle, type: 'h1' }} />
          <ArticleDashedLine />
          {posts.map((post, index) => {
            return (
              <React.Fragment key={index}>
                <ArticleList key={index} {...post.node} />
                {posts.length !== index + 1 && <ArticleDashedLine />}
              </React.Fragment>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default TagPostTemplate

export const pageQuery = graphql`
  query DisplayAllPostsByTagSlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost(
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
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
    allContentfulTag(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`
