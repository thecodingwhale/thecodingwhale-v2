import React from 'react'
import styled from 'styled-components'

const Container = styled.h1`
  background-color: red;
`

const Hello = () => {
  return <Container>Hello</Container>
}

export default {
  title: 'Hello',
  component: Hello,
}

export const Text = () => <Hello>Hello Button</Hello>
