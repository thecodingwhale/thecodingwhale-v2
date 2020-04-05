import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/Template/Layout'
import ArticleTitle from '../components/ArticleTitle/ArticleTitle'
import ArticleDate from '../components/ArticleDate/ArticleDate'
import ArticleDashedLine from '../components/ArticleDashedLine/ArticleDashedLine'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Layout>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className="content">
          <ArticleTitle {...{ title: post.title, type: 'h1' }} />
          <ArticleDate {...{ publishDate: post.publishDate, size: 'large' }} />
          <ArticleDashedLine />
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
