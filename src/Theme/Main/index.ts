import palette from './palette'

import defaultTheme from '../defaultTheme'

const theme = {
  ...defaultTheme,

  name: 'Main theme',
  font: '"Nunito Sans", sans-serif;',
  webfonts: ['Nunito+Sans:400,600,700,800,900', 'Chewy', 'Yrsa'],

  colors: {
    primary: palette.darkGray,
    white: palette.white,
    black: palette.black,

    gray: palette.darkGray,
    graySecondary: palette.darkGraySecondary,
    grayMid: palette.grayMid,

    green: palette.green,
    greenSecondary: palette.greenSecondary,
    greenLight: palette.greenLight,

    orange: palette.orange,
    orangeSecondary: palette.orangeSecondary,

    red: palette.red,

    blueMid: palette.blueMid,
    blueMid2: palette.blueMid2,

    blueLight: palette.blueLight,

    font: {
      primary: palette.darkBlue,
      secondary: palette.black,
    },

    link: {
      primary: palette.black,
      active: palette.black,
    },
  },
}

export default theme
