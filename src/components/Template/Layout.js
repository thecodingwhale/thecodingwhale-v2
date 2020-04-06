import React, { useState, useEffect, useCallback } from 'react'
import { Link as GatsbyLink } from 'gatsby'
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
      justify-content: center;
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
  @media only screen and (min-width: 768px) {
    position: absolute;
    right: 10px;
  }
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
  @media screen and (min-width: 768px) {
    display: none;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  stransition: 0.4s;
  opacity: ${props => (props.display ? '0.95' : '0')};
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.global.backgroundColor};
  z-index: ${props => (props.display ? '1' : '0')};
  @media screen and (min-width: 768px) {
    display: none;
  }
  svg {
    position: absolute;
    top: 49px;
    right: 36px;
  }
`

const IconCloseStyles = styled.div`
  transition: 0.4s;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`

const MenuLink = styled(GatsbyLink)`
  font-size: 18px;
  font-family: Roboto Slab;
  text-transform: uppercase;
  letter-spacing: 10px;
  color: ${props => props.theme.link.color};
  text-shadow: 0px 1px ${props => props.theme.link.colorAccent};
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 768px) {
    &.active {
      color: ${props => props.theme.link.colorAccent};
      text-shadow: 0px 1px ${props => props.theme.link.color};
    }
  }
  &:hover {
    color: ${props => props.theme.link.colorAccent};
    text-shadow: 0px 1px ${props => props.theme.link.color};
  }
`

const DesktopMenuLink = styled(MenuLink)`
  text-decoration: none;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
  &.active {
    &:before {
      content: '';
      width: calc(100% - 10px);
      position: absolute;
      left: 0px;
      bottom: -6px;
      border-width: 0 0 2px;
      border-style: solid;
      border-color: ${props => props.theme.link.color};
    }
    &:after {
      content: '';
      width: calc(100% - 10px);
      position: absolute;
      left: 0px;
      bottom: -8px;
      border-width: 0 0 2px;
      border-style: solid;
      border-color: ${props => props.theme.link.colorAccent};
    }
  }
  &:hover {
    &.active:before {
      border-color: ${props => props.theme.link.colorAccent};
    }
    &.active:after {
      border-color: ${props => props.theme.link.colorAccent};
    }
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
      <MenuLink to="/" activeClassName="active">
        home
      </MenuLink>
      <br />
      <MenuLink to="/about/" activeClassName="active">
        about
      </MenuLink>
    </ModalMobileMenuStyles>
  )
}

ModalMobileMenu.defaultProps = {
  display: false,
}

ModalMobileMenu.propTypes = {
  display: PropTypes.bool,
}

const DesktopMenuStyles = styled.div`
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 65px;
  }
  span {
    width: 40px;
    display: inline-block;
  }
`

const ContentStyles = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`

const FooterStyles = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    height: 120px;
  }
`

const DEFAULT_THEME = 'light'
const Layout = ({ mode, children }) => {
  const [activeMode, setActiveMode] = useState(
    window && (window.localStorage.getItem('theme') === null || mode === null)
      ? DEFAULT_THEME
      : window.localStorage.getItem('theme')
  )
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false)
  const onTogglerChange = useCallback(
    value => {
      if (value) {
        window.localStorage.setItem('theme', 'dark')
        setActiveMode('dark')
      } else {
        window.localStorage.setItem('theme', 'light')
        setActiveMode('light')
      }
    },
    [activeMode]
  )

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
                <DesktopMenuStyles>
                  <DesktopMenuLink to="/" activeClassName="active">
                    home
                  </DesktopMenuLink>
                  <span></span>
                  <DesktopMenuLink to="/about/" activeClassName="active">
                    about
                  </DesktopMenuLink>
                </DesktopMenuStyles>
              </div>
            </div>
          </div>
        </Header>
        <div className="container">
          <div className="columns">
            <div className="column is-full">
              <ContentStyles>{children}</ContentStyles>
            </div>
          </div>
        </div>
        <FooterStyles>All Rights Reserved</FooterStyles>
      </Theme>
    </React.Fragment>
  )
}

Layout.defaultProps = {
  mode: window.localStorage.getItem('theme'),
}

Layout.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,
}

export default Layout
