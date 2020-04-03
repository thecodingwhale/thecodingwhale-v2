import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LogoLarge from '../../assets/images/logo-144x144.svg'
import LogoMedium from '../../assets/images/logo-72x72.svg'
import LogoSmall from '../../assets/images/logo-36x36.svg'

const variants = {
  large: {
    width: '144px',
    component: LogoLarge,
  },
  medium: {
    width: '72px',
    component: LogoMedium,
  },
  small: {
    width: '36px',
    component: LogoSmall,
  },
}

const Image = styled.img`
  max-width: ${props => variants[props.theme.size].width};
`

const Logo = ({ size, className }) => {
  return (
    <Image
      {...(className && {
        className: className,
      })}
      theme={{ size }}
      src={variants[size].component}
      alt="Logo"
    />
  )
}

Logo.defaultProps = {
  size: 'small',
}

Logo.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
}

export default Logo
