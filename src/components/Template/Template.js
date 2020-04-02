import React from 'react'
import PropTypes from 'prop-types'
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
    min-height: 100%;
  }
  @media only screen and (min-width: 768px) {
    body {
      font-size: 16px;
    }
  }
`

const Template = ({ mode, children }) => (
  <React.Fragment>
    <GlobalStyle theme={theme[mode]} />
    <ThemeProvider theme={theme[mode]}>{children}</ThemeProvider>
  </React.Fragment>
)

Template.defaultProps = {
  mode: 'light',
}

Template.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,
}

export default Template
