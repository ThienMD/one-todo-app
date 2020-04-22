import * as React from "react"
import { observer } from "mobx-react-lite"
import { FlatList, ViewStyle } from "react-native"
import { ParamListBase } from "@react-navigation/native"
import { IconButton, List } from "react-native-paper"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import faker from 'faker'
import { Row, Screen, TextField } from "../components"
// import { useStores } from "../models/root-store"
import { color } from "../theme"
import { useStores } from "../models/root-store"

export interface AddTodoScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>
}

const INPUT_WRAPPER: ViewStyle = {
  height: 60,
  backgroundColor: 'white',
  shadowColor: '#999999',
  shadowOffset: { width: 1, height: 3 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 3,
}

const data = [
  {
    title: "Call",
    icon: "phone",
  },
  {
    title: "Check",
    icon: "account-search",
  },
  {
    title: "Get",
    icon: "weather-cloudy-arrow-right",
  },
  {
    title: "Email",
    icon: "email",
  },
  {
    title: "Buy",
    icon: "cart",
  },
  {
    title: "Meet / Schedule",
    icon: "calendar",
  },
  {
    title: "Clean",
    icon: "xml",
  },
  {
    title: "Take ",
    icon: "view-stream",
  },
  {
    title: "Send",
    icon: "send",
  },
  {
    title: "Pay",
    icon: "credit-card",
  },
  {
    title: "Make",
    icon: "view-stream",
  },
  {
    title: "Pick",
    icon: "package",
  },
  {
    title: "Do",
    icon: "yeast",
  },
  {
    title: "Read",
    icon: "book",
  },
  {
    title: "Print",
    icon: "printer",
  },
  {
    title: "Finish",
    icon: "flag",
  },
  {
    title: "Study",
    icon: "weather-hurricane",
  },
  {
    title: "Ask",
    icon: "help-box",
  },
]
export const AddTodoScreen: React.FunctionComponent<AddTodoScreenProps> = observer((props) => {
  const { todo: { addTodo } } = useStores()
  const goBack = React.useMemo(() => () => props.navigation.goBack(), [props.navigation])
  const [input, setInput] = React.useState("")
  const searchText = input.toLowerCase()
  const suggestionList = data.filter((item) => item.title.toLowerCase().indexOf(searchText) > -1)
  const onOptionPress = (text) => {
    setInput(text + " ")
  }
  const btDonePress = () => {
    addTodo({ title: input, id: faker.random.uuid(), userId: 0 })
    goBack()
  }
  return (
    <Screen>
      <Row style={INPUT_WRAPPER}>
        <IconButton
          icon="close"
          size={30}
          onPress={goBack}
        />
        <TextField autoFocus placeholder={"I want to"} value={input} onChangeText={(text) => setInput(text)}/>
        <IconButton
          icon="checkbox-marked-circle"
          color={color.primary}
          size={30}
          disabled={input.length === 0}
          onPress={btDonePress}
        />
      </Row>
      <FlatList
        keyboardDismissMode={"none"}
        keyboardShouldPersistTaps="always"
        data={suggestionList}
        extraData={suggestionList}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) =>
          <List.Item
            onPress={() => onOptionPress(item.title)}
            title={item.title}
            left={props => <List.Icon {...props} icon={item.icon} color={color.primary}/>}
          />}
      />
    </Screen>
  )
})
