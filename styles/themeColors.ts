/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
export const palette = {
  white: '#ffffff',
  offWhite: '#fff9ef',
  black: '#000000',
  darkGrey: '#4F4F4F',
  grey: '',
  lightGrey: '#E6E6E6',
  yellow: '#F9F137',
  lightYellow: '#FCF45F',
  darkBlue: '#08376B',
  blue: '#3c89ff',
  lightBlue: '#98c1ff',
  lightBlue2: '#8da3bb',
  red: '#DC3545',
  orange: '',
  green: '#5DFF8C',
};

export const themeColors = {
  light: {
    background: palette.offWhite,
    foreground: palette.white,
    secondaryForeground: palette.lightGrey,
    primary: palette.black,
    secondary: palette.darkGrey,
    tertiary: palette.grey,
    danger: palette.red,
    success: palette.green,
    active: palette.lightBlue,
    inactive: palette.lightYellow
  },
  dark: {
    background: palette.offWhite,
    foreground: palette.white,
    secondaryForeground: palette.lightGrey,
    primary: palette.black,
    secondary: palette.darkGrey,
    tertiary: palette.grey,
    danger: palette.red,
    success: palette.green,
    active: palette.lightBlue,
    inactive: palette.lightYellow
  },
};
