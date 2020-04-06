import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from '../../global/theme'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    font-family: 'Open Sans';
    font-size: 13px;
    background-color: ${props => props.theme.global.backgroundColor};
    color: ${props => props.theme.global.color};
    text-shadow: 0px 1px ${props => props.theme.global.colorShadow};
    min-height: 100%;
    transition: background-color 0.4s;
  }
  strong {
    color: ${props => props.theme.global.color};
  }
  @media only screen and (min-width: 768px) {
    body {
      font-size: 16px;
    }
  }
  a {
    color: ${props => props.theme.link.colorAccent};
    &:hover {
      color: ${props => props.theme.link.colorAccent};
      opacity: .8;
    }
  }

  .content {
    min-height: 700px;
  }
  .content h1, .content h2, .content h3, .content h4, .content h5, .content h6 {
    font-family: Roboto Slab;
    color: ${props => props.theme.link.color};
    font-weight: normal
  }
  .content p img {
    margin-top: 15px;
  }
`

const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'
const DEFAULT_THEME = LIGHT_THEME

const Theme = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle theme={theme[DARK_THEME]} />
      <ThemeProvider theme={theme[DARK_THEME]}>{children}</ThemeProvider>
    </React.Fragment>
  )
}

export default Theme

export { DEFAULT_THEME, DARK_THEME, LIGHT_THEME }
