import * as React from "react"
import { observer } from "mobx-react-lite"
import { SectionList, ViewStyle } from "react-native"
import { ParamListBase } from "@react-navigation/native"
import { NativeStackNavigationProp } from "react-native-screens/native-stack"
import { Header, Screen, TodoItem, TodoSection } from "../components"
import { List } from "react-native-paper"
import { color } from "../theme"

// import { useStores } from "../models/root-store"

export interface SettingsScreenProps {
  navigation: NativeStackNavigationProp<ParamListBase>
}

const ROOT: ViewStyle = {}

const settings = [
  {
    title: "ACCOUNT",
    data: [
      "Profile", "Integrations", "Premium"
    ]
  },
  {
    title: "PREFERENCES",
    data: [
      "Theme", "Quick-add bar", "Meeting follow-up", "Shake", "First day", "Time Zone", "Default List", "Language", "Notification sound", "Smart grocery list"
    ]
  },
  {
    title: "TASKS",
    data: [
      "Moment", "Completed Tasks", "Color Tags"
    ]
  },
  {
    title: "CALENDAR",
    data: [
      "Event Reminder"
    ]
  },
  {
    title: "WIDGET",
    data: [
      "Show Completed tasks"
    ]
  }
]

const SECTION: ViewStyle = {
  backgroundColor: "white"
}

export const SettingsScreen: React.FunctionComponent<SettingsScreenProps> = observer((props) => {
  // const { someStore } = useStores()
  return (
    <Screen style={ROOT}>
      <Header
        headerTx="settings.title"
      />
      <SectionList
        removeClippedSubviews={false}
        sections={settings}
        keyExtractor={(item, index) => index + ""}
        renderItem={({ item }) => <List.Item title={item}/>}
        renderSectionHeader={({ section: { title } }) => (
          <List.Subheader style={SECTION}>{title}</List.Subheader>
        )}
      />
    </Screen>
  )
})
