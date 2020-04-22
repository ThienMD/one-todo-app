import * as React from "react"
import { observer } from "mobx-react-lite"
import { SectionList, TextStyle, ViewStyle } from "react-native"
import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { useStores } from "../models/root-store"
import faker from "faker"
import { Header, QuickInput, Screen, TodoItem, TodoSection } from "../components"
import { color, spacing } from "../theme"
import { getSnapshot } from "mobx-state-tree"

export interface TodoScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>
}

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}

const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}

const BOLD: TextStyle = { fontWeight: "bold" }

const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}

export const TodoScreen: React.FunctionComponent<TodoScreenProps> = observer((props) => {
  const { todo: { todoData, list, addTodo } } = useStores()
  const onAdd = (text) => {
    if (text.length === 0) {
      props.navigation.navigate("addTodo")
      return
    }
    addTodo({ title: text, id: faker.random.uuid(), userId: 0 })
  }
  // console.log("todo", todoData)
  return (
    <Screen style={CONTAINER}>
      <Header
        headerTx="todo.allTasks"
        leftIcon="nineDots"
        rightIcon="circleMore"
        style={HEADER}
        titleStyle={HEADER_TITLE}
      />
      <SectionList
        extraData={getSnapshot(list)}
        removeClippedSubviews={false}
        sections={todoData}
        keyExtractor={(item, index) => index + ""}
        renderItem={({ item }) =>
          <TodoItem
            key={item.id}
            title={item.title}
            completed={item.completed}
            onCompleteChanged={item.toggleCompleted}/>
        }
        renderSectionHeader={({ section: { title } }) => (
          <TodoSection title={title} onAddPress={() => onAdd("")}/>
        )}
      />
      <QuickInput onAdd={onAdd}/>
    </Screen>
  )
})
