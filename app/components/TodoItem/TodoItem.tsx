import * as React from "react"
import { Row, Text } from "../"

import { Checkbox } from "react-native-paper"

export interface TodoItemProps {
  title: string
  completed: boolean
  onCompleteChanged (completed: boolean): void
}

/**
 * React.FunctionComponent for your hook(s) needs
 *
 * Component description here for TypeScript tips.
 */
export const TodoItem: React.FunctionComponent<TodoItemProps> = props => {
  const { title, completed, onCompleteChanged } = props
  // const { someStore } = useStores()

  return (
    <Row>
      <Checkbox.Android
        status={completed ? "checked" : "unchecked"}
        onPress={() => onCompleteChanged(!completed)}
      />
      <Text>{title}</Text>
    </Row>
  )
}
