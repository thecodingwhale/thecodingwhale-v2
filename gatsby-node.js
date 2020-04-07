const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostComponent = path.resolve('./src/templates/blog-post.js')
  const tagPostComponent = path.resolve('./src/templates/tag-post.js')

  const blogs = graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors)
      reject(result.errors)
    }

    const posts = result.data.allContentfulPost.edges
    posts.forEach(post => {
      createPage({
        path: `/blog/${post.node.slug}/`,
        component: blogPostComponent,
        context: {
          slug: post.node.slug,
        },
      })
    })
  })

  const tags = graphql(
    `
      {
        allContentfulTag {
          edges {
            node {
              slug
              title
              id
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors)
      reject(result.errors)
    }
    const tags = result.data.allContentfulTag.edges
    tags.forEach(tag => {
      createPage({
        path: `/tag/${tag.node.slug}/`,
        component: tagPostComponent,
        context: {
          slug: tag.node.slug,
        },
      })
    })
  })

  return Promise.all([blogs, tags])
}
