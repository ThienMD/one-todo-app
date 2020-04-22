import * as React from "react"
import { Row, TextField } from "../"
import { quickInputStyles as styles } from "./QuickInput.styles"
import { IconButton } from "react-native-paper"
import { color } from "../../theme"

export interface QuickInputProps {
  onAdd (text): void
}

/**
 * React.FunctionComponent for your hook(s) needs
 *
 * Component description here for TypeScript tips.
 */
export const QuickInput: React.FunctionComponent<QuickInputProps> = ({ onAdd }) => {
  const [value, setValue] = React.useState("")
  const btAddPress = () => {
    onAdd(value)
    setValue("")
  }
  return (
    <Row style={styles.WRAPPER}>
      <TextField
        placeholder='I want to'
        inputStyle={styles.INPUT}
        style={styles.INPUT_WRAPPER}
        value={value}
        onChangeText={text => setValue(text)}
      />
      <IconButton
        icon="plus-circle"
        size={40}
        color={color.primary}
        onPress={btAddPress}/>
    </Row>
  )
}
