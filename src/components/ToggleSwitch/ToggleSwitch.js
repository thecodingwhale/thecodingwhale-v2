import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const variants = {
  small: {
    baseWidth: '40px',
    baseHeight: '18px',
    circleArea: '24px',
    circleSelectedLeft: '-12px',
  },
  medium: {
    baseWidth: '55px',
    baseHeight: '26px',
    circleArea: '32px',
    circleSelectedLeft: '-4px',
  },
  large: {
    baseWidth: '70px',
    baseHeight: '36px',
    circleArea: '42px',
    circleSelectedLeft: '1px',
  },
}

const Base = styled.div`
  display: flex;
  align-items: center;

  label {
    position: relative;
    display: inline-block;
    width: ${props => variants[props.size].baseWidth};
    height: ${props => variants[props.size].baseHeight};
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.toggle.default.backgroundColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border: 2px solid ${props => props.theme.toggle.default.borderColor};
  }

  span:before {
    position: absolute;
    content: '';
    height: ${props => variants[props.size].circleArea};
    width: ${props => variants[props.size].circleArea};
    left: -2px;
    bottom: -5px;
    background-color: ${props =>
      props.theme.toggle.default.circleBackgroundColor};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border: 2px solid ${props => props.theme.toggle.default.circleBorderColor};
  }

  input:checked + span {
    background-color: ${props => props.theme.toggle.checked.backgroundColor};
  }

  input:focus + span {
    box-shadow: none;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    left: ${props => variants[props.size].circleSelectedLeft};
    border-color: ${props => props.theme.toggle.checked.circleBorderColor};
    background-color: ${props =>
      props.theme.toggle.checked.circleBackgroundColor};
  }

  span {
    border-radius: 34px;
  }
  span:before {
    border-radius: 50%;
  }
`

const Title = styled.div`
  margin-right: 5px;
`

const ToggleSwitch = ({ size, title }) => {
  return (
    <Base size={size}>
      {title && <Title>{title}</Title>}
      <label>
        <input type="checkbox" />
        <span />
      </label>
    </Base>
  )
}

ToggleSwitch.defaultProps = {
  size: 'medium',
}

ToggleSwitch.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  title: PropTypes.string,
}

export default ToggleSwitch
