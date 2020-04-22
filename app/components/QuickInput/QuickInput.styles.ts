import { ViewStyle } from "react-native"
import { color } from "../../theme"

export const quickInputStyles = {
  WRAPPER: {
    backgroundColor: color.dim,
    paddingHorizontal: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
  } as ViewStyle,
  INPUT_WRAPPER: {
    flex: 1,
    padding: 0
  },
  INPUT: {
    borderRadius: 30,
    paddingLeft: 15,
  } as ViewStyle
}
