import React from "react"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { AddTodoScreen, DemoScreen } from "../screens"
import MainTab from "./tab-navigator"
import { PrimaryParamList } from "./types"

const Stack = createNativeStackNavigator<PrimaryParamList>()

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="main" component={MainTab} />
      <Stack.Screen name="addTodo" component={AddTodoScreen} />
      <Stack.Screen name="demo" component={DemoScreen} />
    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["todo"]
