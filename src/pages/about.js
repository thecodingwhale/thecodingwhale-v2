import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/Template/Layout'
import ArticleTitle from '../components/ArticleTitle/ArticleTitle'

class About extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const person = get(this, 'props.data.allContentfulPerson.edges')
    const { title, shortBio } = person[0].node
    return (
      <Layout>
        <Helmet title={`${title} |  ${siteTitle}`} />
        <div className="content">
          <ArticleTitle {...{ title: title, type: 'h1' }} />
          <div
            className="summary"
            dangerouslySetInnerHTML={{
              __html: shortBio.childMarkdownRemark.html,
            }}
          />
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          title
          shortBio {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
