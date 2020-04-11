import React from 'react'
import Logo from '../components/Logo/Logo'
import { Link as GatsbyLink } from 'gatsby'
import Layout from '../components/Template/Layout'
import styled from 'styled-components'

const BaseStyle = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    margin-bottom: 30px;
  }

  h1 {
    font-size: 60px;
    line-height: 45px;
    margin-bottom: 30px;
    span {
      display: block;
      font-weight: bold;
    }
    small {
      text-transform: uppercase;
      font-size: 50%;
    }
  }
  a {
    margin-bottom: 30px;
  }
`

const PageNotFound = () => {
  return (
    <Layout is404>
      <BaseStyle>
        <Logo size="large" />
        <h1>
          <span>404</span>
          <small>Page not found</small>
        </h1>
        <GatsbyLink className="button">Back to Home</GatsbyLink>
        <p>
          Just hang in there.
          <br />I providea escape button
          <br />
          to make sure you can go home safely.
        </p>
      </BaseStyle>
    </Layout>
  )
}

export default PageNotFound
