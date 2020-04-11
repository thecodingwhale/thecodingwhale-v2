const colors = require('../components/Branding/Colors')
const {
  white,
  lightGray,
  darkGray,
  primaryBrand,
  secondaryBrand,
  primaryAccent,
} = colors
const theme = {
  global: {
    backgroundColor: lightGray,
    color: darkGray,
    colorShadow: white,
  },
  link: {
    color: darkGray,
    colorAccent: primaryBrand,
  },
  button: {
    color: primaryAccent,
    backgroundColor: 'transparent',
    borderColor: primaryAccent,
  },
  toggle: {
    default: {
      borderColor: darkGray,
      backgroundColor: white,
      circleBorderColor: darkGray,
      circleBackgroundColor: white,
    },
    checked: {
      borderColor: darkGray,
      backgroundColor: white,
      circleBorderColor: darkGray,
      circleBackgroundColor: secondaryBrand,
    },
  },
}

module.exports = theme
