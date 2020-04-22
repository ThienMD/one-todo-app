import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
// import { TodoItem } from "./TodoItem"

declare let module

storiesOf("TodoItem", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        {/* <TodoItem text="TodoItem" /> */}
      </UseCase>
    </Story>
  ))
