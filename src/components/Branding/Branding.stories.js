import React from 'react'
import styled from 'styled-components'

import {
  lightGray,
  darkGray,
  primaryBrand,
  secondaryBrand,
  primaryAccent,
  secondaryAccent,
} from './Colors'

const colors = {
  lightGray,
  darkGray,
  primaryBrand,
  secondaryBrand,
  primaryAccent,
  secondaryAccent,
}

const Box = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  background-color: ${props => {
    return colors[props.theme.color]
  }};
`
const Branding = ({ children, color }) => {
  const Wrapper = styled.div`
    text-align: center;
  `
  return (
    <Wrapper>
      <Box theme={{ color }} />
      <span>{children}</span>
    </Wrapper>
  )
}

export default {
  title: 'Branding',
  component: Branding,
}

export const Colors = () => {
  const Wrapper = styled.div`
    padding-top: 80px;
    margin: 0 auto;
    max-width: 980px;
    display: flex;
    justify-content: space-between;
  `
  return (
    <Wrapper>
      <Branding color="lightGray">Light Gray</Branding>
      <Branding color="darkGray">Dark Gray</Branding>
      <Branding color="primaryBrand">Primary Brand</Branding>
      <Branding color="secondaryBrand">Secondary Brand</Branding>
      <Branding color="primaryAccent">Primary Accent</Branding>
      <Branding color="secondaryAccent">Secondary Accent</Branding>
    </Wrapper>
  )
}
