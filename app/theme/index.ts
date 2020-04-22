import { DefaultTheme } from 'react-native-paper'
import { color } from "./color"

export * from "./color"
export * from "./spacing"
export * from "./typography"
export * from "./timing"

export const themeConfig = {
  ...DefaultTheme,
  roundness: 2,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: color.primary,
    accent: color.primary,
    text: color.text,

  },
}
