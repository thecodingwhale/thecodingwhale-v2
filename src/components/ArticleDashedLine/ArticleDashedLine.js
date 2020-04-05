import React from 'react'
import styled from 'styled-components'

const ArticleDashedLine = styled.div`
  width: 100%;
  height: 1px;
  display: block;
  margin-top: 30px;
  margin-bottom: 20px;
  border-bottom: 1px dashed ${props => props.theme.global.color};
`

export default ArticleDashedLine
