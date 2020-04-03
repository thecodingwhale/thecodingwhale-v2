import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Logo from '../Logo/Logo'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
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
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  @media only screen and (min-width: 768px) {
    body {
      font-size: 16px;
    }
  }
`

const Header = styled.div`
  .base {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding-left: 20px;
    padding-right: 20px;
    .Logo__Large,
    .ToggleSwitch__Medium {
      display: none;
    }
    .Logo__Medium,
    .ToggleSwitch__Small {
      display: flex;
    }

    @media only screen and (min-width: 768px) {
      height: 180px;
      .Logo__Large,
      .ToggleSwitch__Medium {
        display: flex;
      }
      .Logo__Medium,
      .ToggleSwitch__Small {
        display: none;
      }
    }
  }
`

const Styles = styled.div`
  text-transform: uppercase;
  font-family: Roboto Slab;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`

const Toggler = ({ onChange, isDarkMode }) => {
  const toggleDarkTheme = useCallback(value => {
    if (onChange) {
      onChange(value)
    }
  }, [])
  return (
    <Styles>
      <ToggleSwitch
        title="Dark Mode"
        className="ToggleSwitch__Small"
        size="small"
        onChange={value => toggleDarkTheme(value)}
        checked={isDarkMode}
      />
      <ToggleSwitch
        title="Dark Mode"
        className="ToggleSwitch__Medium"
        size="medium"
        onChange={value => toggleDarkTheme(value)}
        checked={isDarkMode}
      />
    </Styles>
  )
}

const Theme = ({ mode, children }) => {
  return (
    <React.Fragment>
      <GlobalStyle theme={theme[mode]} />
      <ThemeProvider theme={theme[mode]}>{children}</ThemeProvider>
    </React.Fragment>
  )
}

if (window.localStorage.getItem('themeMode') === null) {
  window.localStorage.setItem('themeMode', 'dark')
}

Theme.defaultProps = {
  mode: window.localStorage.getItem('themeMode'),
}

Theme.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,
}

export default Theme

const Layout = ({ mode, children }) => {
  const [activeMode, setActiveMode] = useState(mode)
  const onTogglerChange = useCallback(value => {
    if (value === false) {
      window.localStorage.setItem('themeMode', 'light')
      setActiveMode('light')
    } else {
      window.localStorage.setItem('themeMode', 'dark')
      setActiveMode('dark')
    }
  }, [])
  console.log(activeMode)
  return (
    <Theme mode={activeMode}>
      <Header>
        <div className="container">
          <div className="columns">
            <div className="column is-full">
              <div className="base">
                <a className="brand">
                  <Logo className="Logo__Medium" size="medium" />
                  <Logo className="Logo__Large" size="large" />
                </a>
                <Toggler
                  onChange={onTogglerChange}
                  isDarkMode={activeMode === 'dark'}
                />
              </div>
            </div>
          </div>
        </div>
      </Header>
      <div className="container">
        <div className="columns">
          <div className="column is-full">{children}</div>
        </div>
      </div>
    </Theme>
  )
}

Layout.defaultProps = {
  mode: window.localStorage.getItem('themeMode'),
}

Layout.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,
}

export { Layout }
