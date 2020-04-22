import * as React from "react"
import { TextInput, TextStyle } from "react-native"
import { color, typography } from "../../theme"
import { translate } from "../../i18n"
import { TextFieldProps } from "./text-field.props"
import { flatten, mergeAll } from "ramda"

// the base styling for the TextInput
const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  minHeight: 44,
  fontSize: 18,
  flex: 1,
  backgroundColor: color.palette.white,
}

const enhance = (style, styleOverride) => {
  return mergeAll(flatten([style, styleOverride]))
}

/**
 * A component which has a label and an input together.
 */
export const TextField: React.FunctionComponent<TextFieldProps> = props => {
  const {
    placeholderTx,
    placeholder,
    labelTx,
    label,
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    ...rest
  } = props

  let inputStyle: TextStyle = INPUT
  inputStyle = enhance(inputStyle, inputStyleOverride)
  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder

  return (
    <TextInput
      placeholder={actualPlaceholder}
      placeholderTextColor={color.palette.lightGrey}
      underlineColorAndroid={color.transparent}
      {...rest}
      style={inputStyle}
      ref={forwardedRef}
    />
  )
}
