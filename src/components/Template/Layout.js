import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../Icon/Icon'
import Logo from '../Logo/Logo'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'
import Theme from './Template'

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

const TogglerStyles = styled.div`
  text-transform: uppercase;
  font-family: Roboto Slab;
  margin-right: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`

const MenuStyles = styled.div`
  display: inline-flex;
`

const Toggler = ({ onChange, isDarkMode }) => {
  const toggleDarkTheme = useCallback(value => {
    if (onChange) {
      onChange(value)
    }
  }, [])
  return (
    <TogglerStyles>
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
    </TogglerStyles>
  )
}

const BurgerMenuStyles = styled.div`
  transition: 0.4s;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const BurgerMenu = ({ onClick }) => {
  const onClickBurgerMenu = () => {
    if (onClick) {
      onClick()
    }
  }
  return (
    <BurgerMenuStyles type="button" onClick={onClickBurgerMenu}>
      <Icon type="burger" />
    </BurgerMenuStyles>
  )
}

const ModalMobileMenuStyles = styled.div`
  transition: 0.4s;
  opacity: ${props => (props.display ? '0.95' : '0')};
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.global.backgroundColor};
  z-index: ${props => (props.display ? '1' : '0')};

  svg {
    position: absolute;
    top: 49px;
    right: 35px;
  }
`

const IconCloseStyles = styled.div`
  transition: 0.4s;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`
const ModalMobileMenu = ({ display, onClose }) => {
  return (
    <ModalMobileMenuStyles display={display}>
      <IconCloseStyles
        type="button"
        onClick={() => {
          if (onClose) {
            onClose()
          }
        }}
      >
        <Icon type="close" />
      </IconCloseStyles>
    </ModalMobileMenuStyles>
  )
}

ModalMobileMenu.defaultProps = {
  display: false,
}

ModalMobileMenu.propTypes = {
  display: PropTypes.bool,
}

const Layout = ({ mode, children }) => {
  const [activeMode, setActiveMode] = useState(mode)
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false)
  const onTogglerChange = useCallback(value => {
    if (value === false) {
      window.localStorage.setItem('themeMode', 'light')
      setActiveMode('light')
    } else {
      window.localStorage.setItem('themeMode', 'dark')
      setActiveMode('dark')
    }
  }, [])
  return (
    <React.Fragment>
      <Theme mode={activeMode}>
        <ModalMobileMenu
          display={displayMobileMenu}
          onClose={() => setDisplayMobileMenu(!displayMobileMenu)}
        />
        <Header>
          <div className="container">
            <div className="columns">
              <div className="column is-full">
                <div className="base">
                  <a className="brand">
                    <Logo className="Logo__Medium" size="medium" />
                    <Logo className="Logo__Large" size="large" />
                  </a>
                  <MenuStyles>
                    <Toggler
                      onChange={onTogglerChange}
                      isDarkMode={activeMode === 'dark'}
                    />
                    <BurgerMenu
                      onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
                    />
                  </MenuStyles>
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
    </React.Fragment>
  )
}

Layout.defaultProps = {
  mode: window.localStorage.getItem('themeMode'),
}

Layout.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,
}

export default Layout
