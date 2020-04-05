import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const variants = {
  small: '11px',
  medium: '13px',
  large: '16px',
}
const ArticleDateStyle = styled.div`
  font-size: ${props => variants[props.size]};
  font-family: Roboto Slab;
  margin-bottom: 10px;
`

const ArticleDate = ({ publishDate }) => {
  return <ArticleDateStyle>{publishDate}</ArticleDateStyle>
}

ArticleDate.defaultProps = {
  size: 'medium',
}

ArticleDate.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
}

export default ArticleDate
