const colors = require('../components/Branding/Colors')
const {
  black,
  lightGray,
  darkGray,
  primaryBrand,
  secondaryBrand,
  primaryAccent,
} = colors

const theme = {
  global: {
    backgroundColor: darkGray,
    color: lightGray,
    colorShadow: black,
  },
  link: {
    color: lightGray,
    colorAccent: primaryBrand,
  },
  button: {
    color: primaryAccent,
    backgroundColor: 'transparent',
    borderColor: primaryAccent,
  },
  toggle: {
    default: {
      borderColor: secondaryBrand,
      backgroundColor: secondaryBrand,
      circleBorderColor: secondaryBrand,
      circleBackgroundColor: darkGray,
    },
    checked: {
      borderColor: secondaryBrand,
      backgroundColor: secondaryBrand,
      circleBorderColor: primaryBrand,
      circleBackgroundColor: primaryBrand,
    },
  },
}

module.exports = theme
