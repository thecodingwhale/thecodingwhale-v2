import {
  white,
  black,
  lightGray,
  darkGray,
  primaryBrand,
  secondaryBrand,
  primaryAccent,
} from '../components/Branding/Colors'

const theme = {
  light: {
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
  },
  dark: {
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
  },
}

export default theme
