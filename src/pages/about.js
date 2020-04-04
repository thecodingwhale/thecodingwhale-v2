import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Template/Layout'
import ArticleList from '../components/ArticleList/ArticleList'
import ArticleDashedLine from '../components/ArticleDashedLine/ArticleDashedLine'

const blogs = [
  {
    title: 'Day 1: Sketch and Redesigning',
    slug: '/home',
    date: 'March 31st, 2020',
    summary: 'Looping an object using Object.keys',
    tags: [
      {
        title: 'jam stack',
        slug: '/home',
      },
      {
        title: 'jam stack',
        slug: '/home',
      },
      {
        title: 'jam stack',
        slug: '/home',
      },
    ],
  },
  {
    title:
      'Building <Tabs /> and <Accordion /> components along with React Render Props.',
    slug: '/home',
    date: 'March 4th, 2019',
    summary: 'Looping an object using Object.keys',
    tags: [
      {
        title: 'jam stack',
        slug: '/home',
      },
      {
        title: 'jam stack',
        slug: '/home',
      },
      {
        title: 'jam stack',
        slug: '/home',
      },
    ],
  },
  {
    title: 'Iterating an objects using Object.keys',
    slug: '/home',
    date: 'March 4th, 2019',
    summary: 'Looping an object using Object.keys',
    tags: [
      {
        title: 'jam stack',
        slug: '/home',
      },
      {
        title: 'jam stack',
        slug: '/home',
      },
      {
        title: 'jam stack',
        slug: '/home',
      },
    ],
  },
  {
    title: 'From Wordpress to Contentful + GatsbyJS + Netlify',
    slug: '/home',
    date: 'March 4th, 2019',
    summary: 'Looping an object using Object.keys',
    tags: [
      {
        title: 'jam stack',
        slug: '/home',
      },
      {
        title: 'jam stack',
        slug: '/home',
      },
      {
        title: 'jam stack',
        slug: '/home',
      },
    ],
  },
  {
    title: 'From Wordpress to Contentful + GatsbyJS + Netlify',
    slug: '/home',
    date: 'March 4th, 2019',
    summary: 'Looping an object using Object.keys',
    tags: [
      {
        title: 'jam stack',
        slug: '/home',
      },
      {
        title: 'jam stack',
        slug: '/home',
      },
      {
        title: 'jam stack',
        slug: '/home',
      },
    ],
  },
]

class About extends React.Component {
  render() {
    const lastBlogPost = blogs.length
    return (
      <Layout>
        {blogs.map((blog, index) => (
          <React.Fragment>
            <ArticleList {...blog} />
            {lastBlogPost !== index + 1 && <ArticleDashedLine />}
          </React.Fragment>
        ))}
      </Layout>
    )
  }
}

export default About
