import * as React from "react"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { CalendarScreen, SettingsScreen, TodoScreen } from "../screens"
import { color } from "../theme"
import { ViewStyle } from "react-native"

const Tab = createMaterialBottomTabNavigator()

const TAB: ViewStyle = {
  backgroundColor: "white",
}

export default function MainTab() {
  const tabs = [
    {
      name: "Tasks",
      component: TodoScreen,
      icon: "checkbox-marked-circle",
    },
    {
      name: "Calendar",
      component: CalendarScreen,
      icon: "calendar",
    },
    {
      name: "Settings",
      component: SettingsScreen,
      icon: "settings-outline",
    },
  ]
  return (
    <Tab.Navigator
      initialRouteName="todo"
      activeColor={color.primary}
      barStyle={TAB}

    >
      {
        tabs.map(({ name, component, icon }) => <Tab.Screen key={name} name={name} component={component} options={{
          tabBarLabel: name,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name={icon} color={color} size={26}/>
          ),
        }}/>)
      }
    </Tab.Navigator>
  )
}
