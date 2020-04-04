import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

const ArticleTitleStyleHeaderTwo = styled.h2`
  font-size: 22px;
  font-weight: normal;
  font-family: Roboto Slab;
  margin-bottom: 10px;
  line-height: 1.5;
  color: ${props => props.theme.link.color};
  a {
    color: ${props => props.theme.link.color} !important;
    text-shadow: 0px 1px ${props => props.theme.link.colorAccent} !important;
  }
`

const ArticleTitleStyleHeaderOne = styled.h1(ArticleTitleStyleHeaderTwo)
const ArticleTitleStyleHeaderThree = styled.h3(ArticleTitleStyleHeaderTwo)
const ArticleTitleStyleHeaderFour = styled.h4(ArticleTitleStyleHeaderTwo)
const ArticleTitleStyleHeaderFive = styled.h5(ArticleTitleStyleHeaderTwo)
const ArticleTitleStyleHeaderSix = styled.h6(ArticleTitleStyleHeaderTwo)

const variants = {
  h1: ArticleTitleStyleHeaderOne,
  h2: ArticleTitleStyleHeaderTwo,
  h3: ArticleTitleStyleHeaderThree,
  h4: ArticleTitleStyleHeaderFour,
  h5: ArticleTitleStyleHeaderFive,
  h6: ArticleTitleStyleHeaderSix,
}

const ArticleTitle = ({ slug, title, type }) => {
  const Component = variants[type]
  return (
    <Component>
      {slug ? <GatsbyLink to={`/blog/${slug}`}>{title}</GatsbyLink> : title}
    </Component>
  )
}

ArticleTitle.defaultProps = {
  type: 'h2',
}

ArticleTitle.propTypes = {
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
}

export default ArticleTitle
