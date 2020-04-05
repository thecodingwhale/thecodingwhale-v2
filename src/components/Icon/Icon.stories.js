import React from 'react'
import styled from 'styled-components'
import Template from '../Template/Template'
import Icon from './Icon'

export default {
  title: 'Icon',
  component: Icon,
}

const Wrapper = styled.div`
  padding-top: 80px;
  margin: 0 auto;
  max-width: 980px;
  display: flex;
  justify-content: space-between;
`
export const IconsLight = () => {
  return (
    <Template mode="light">
      <Wrapper>
        <Icon type="close" />
        <Icon type="burger" />
      </Wrapper>
    </Template>
  )
}

export const IconsDark = () => {
  return (
    <Template mode="dark">
      <Wrapper>
        <Icon type="close" />
        <Icon type="burger" />
      </Wrapper>
    </Template>
  )
}
