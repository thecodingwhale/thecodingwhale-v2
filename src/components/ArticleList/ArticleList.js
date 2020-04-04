import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import ArticleTitle from '../ArticleTitle/ArticleTitle'
import ArticleDate from '../ArticleDate/ArticleDate'

const ButtonLink = styled(GatsbyLink)`
  color: ${props => props.theme.button.color};
  background-color: ${props => props.theme.button.backgroundColor};
  border-color: ${props => props.theme.button.borderColor};
  border-width: 1px;
  height: 28px;
  border-radius: 4px;
  padding-left: 7px;
  padding-right: 7px;
  font-size: 13px;
  &:hover {
    color: ${props => props.theme.button.color};
    background-color: ${props => props.theme.button.backgroundColor};
    border-color: ${props => props.theme.button.borderColor};
  }
`

const ArticleListStyle = styled.div`
  .summary {
    margin-bottom: 15px;
  }
`

const ArticleList = ({ title, slug, publishDate, metaDescription, tags }) => {
  return (
    <ArticleListStyle>
      <ArticleTitle {...{ title, slug }} />
      <ArticleDate {...{ publishDate }} />
      <div
        className="summary"
        dangerouslySetInnerHTML={{
          __html: metaDescription.childMarkdownRemark.html,
        }}
      />
      {tags.length !== 0 && (
        <div className="field is-grouped">
          {tags.map(tag => (
            <p class="control">
              <ButtonLink className="button" to={tag.slug}>
                {tag.title}
              </ButtonLink>
            </p>
          ))}
        </div>
      )}
    </ArticleListStyle>
  )
}

export default ArticleList
