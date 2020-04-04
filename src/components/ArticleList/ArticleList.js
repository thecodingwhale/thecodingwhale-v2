import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

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
  .title {
    font-size: 22px;
    font-weight: normal;
    font-family: Roboto Slab;
    margin-bottom: 10px;
    line-height: 1.5;
    a {
      color: ${props => props.theme.link.color};
      text-shadow: 0px 1px ${props => props.theme.link.colorAccent};
    }
  }
  .date {
    font-size: 13px;
    font-family: Roboto Slab;
    margin-bottom: 10px;
  }
  .summary {
    margin-bottom: 15px;
  }
`

const ArticleList = ({ title, slug, date, summary, tags }) => (
  <ArticleListStyle>
    <h2 className="title">
      <GatsbyLink to={slug}>{title}</GatsbyLink>
    </h2>
    <div className="date">{date}</div>
    <div className="summary">{summary}</div>
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

export default ArticleList
