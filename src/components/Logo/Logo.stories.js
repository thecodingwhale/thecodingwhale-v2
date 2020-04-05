import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

export default {
  title: 'Logo',
  component: Logo,
}

export const Sizes = () => {
  const Wrapper = styled.div`
    padding-top: 80px;
    margin: 0 auto;
    max-width: 980px;
    display: flex;
    justify-content: space-between;
  `
  return (
    <Wrapper>
      <Logo size="large" />
      <Logo size="medium" />
      <Logo size="small" />
    </Wrapper>
  )
}
