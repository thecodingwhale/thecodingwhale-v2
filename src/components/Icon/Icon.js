import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SVGStyled = styled.svg`
  line {
    stroke: ${props => props.theme.global.color};
  }
`

const variants = {
  close: () => (
    <SVGStyled
      xmlns="http://www.w3.org/2000/svg"
      width="21.92"
      height="21.92"
      viewBox="0 0 21.92 21.92"
    >
      <g
        id="Group_5"
        data-name="Group 5"
        transform="translate(10.96 -15.203) rotate(45)"
      >
        <line
          id="Line_1"
          data-name="Line 1"
          x2="30"
          transform="translate(3.5 18.5)"
          fill="none"
          stroke="#3c4243"
          strokeWidth="1"
        />
        <line
          id="Line_2"
          data-name="Line 2"
          y2="30"
          transform="translate(18.5 3.5)"
          fill="none"
          stroke="#3c4243"
          strokeWidth="1"
        />
      </g>
    </SVGStyled>
  ),
  burger: () => (
    <SVGStyled
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="21"
      viewBox="0 0 30 21"
    >
      <g id="Group_6" data-name="Group 6" transform="translate(-3.5 -8)">
        <line
          id="Line_2"
          data-name="Line 2"
          y2="30"
          transform="translate(33.5 18.5) rotate(90)"
          fill="none"
          stroke="#3c4243"
          strokeWidth="1"
        />
        <line
          id="Line_3"
          data-name="Line 3"
          y2="30"
          transform="translate(33.5 28.5) rotate(90)"
          fill="none"
          stroke="#3c4243"
          strokeWidth="1"
        />
        <line
          id="Line_4"
          data-name="Line 4"
          y2="30"
          transform="translate(33.5 8.5) rotate(90)"
          fill="none"
          stroke="#3c4243"
          strokeWidth="1"
        />
      </g>
    </SVGStyled>
  ),
}

const Icon = ({ type, className }) => {
  const Component = variants[type]
  return (
    <Component
      {...(className && {
        className: className,
      })}
    />
  )
}

Icon.propTypes = {
  type: PropTypes.oneOf(['close', 'burger']).isRequired,
}

export default Icon
