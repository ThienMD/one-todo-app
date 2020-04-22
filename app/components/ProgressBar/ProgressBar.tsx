import * as React from "react"
import { ViewStyle } from "react-native"
import { Row, Text } from "../"
import { Colors, ProgressBar as PaperProgressBar } from "react-native-paper"
import { progressBarStyles as styles } from "./ProgressBar.styles"

export interface ProgressBarProps {
  /**
   * The text to display if not using `tx` or nested components.
   */
  progress: number

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
export function ProgressBar(props: ProgressBarProps) {
  // grab the props
  const { style, progress, ...rest } = props
  const textStyle = { }
  const progressText = `${progress * 100}%`
  return (
    <Row style={style} {...rest}>
      <PaperProgressBar progress={0.5} color={Colors.blue50} style={styles.progressBar} />
      <Text text={progressText} style={textStyle} />
    </Row>
  )
}
