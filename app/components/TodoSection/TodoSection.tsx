import * as React from "react"
import { ViewStyle } from "react-native"
import { Row, Title } from "../"
import { IconButton } from "react-native-paper"
import { todoSectionStyles as styles } from "./TodoSection.styles"
import { color } from "../../theme"

export interface TodoSectionProps {
  title?: string

  onAddPress (): void
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function TodoSection(props: TodoSectionProps) {
  // grab the props
  const { title, onAddPress, style, ...rest } = props

  return (
    <Row style={[styles.WRAPPER, style]} {...rest}>
      <Title style={styles.TITLE}>{title}</Title>
      <IconButton
        icon="plus"
        size={30}
        color={color.primary}
        onPress={onAddPress}
      />
    </Row>
  )
}
