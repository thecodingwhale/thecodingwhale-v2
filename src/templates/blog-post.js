import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/Template/Layout'
import ArticleTitle from '../components/ArticleTitle/ArticleTitle'
import ArticleDate from '../components/ArticleDate/ArticleDate'
import ArticleDashedLine from '../components/ArticleDashedLine/ArticleDashedLine'
import { Disqus } from 'gatsby-plugin-disqus'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPost')
    const { title, url } = get(this.props, 'data.site.siteMetadata')

    let disqusConfig = {
      url: `${url}/blog/${post.slug}`,
      identifier: post.id,
      title: post.title,
    }

    return (
      <Layout>
        <Helmet title={`${post.title} | ${title}`} />
        <div className="content">
          <ArticleTitle {...{ title: post.title, type: 'h1' }} />
          <ArticleDate {...{ publishDate: post.publishDate, size: 'large' }} />
          <ArticleDashedLine />
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
          <ArticleDashedLine />
          <Disqus config={disqusConfig} />
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
        url
        title
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      id
      title
      slug
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
