import * as React from "react"
import { View, ViewStyle } from "react-native"
import { rowStyles } from './Row.styles'
export interface RowProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle | ViewStyle[]

  children?: React.ReactNode
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function Row(props: RowProps) {
  // grab the props
  const { style, ...rest } = props

  return (
    <View style={[rowStyles.WRAPPER, style]} {...rest}/>
  )
}
