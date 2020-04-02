import {
  white,
  lightGray,
  darkGray,
  primaryBrand,
  secondaryBrand,
} from '../components/Branding/Colors'

const theme = {
  light: {
    global: {
      backgroundColor: lightGray,
      color: darkGray,
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
