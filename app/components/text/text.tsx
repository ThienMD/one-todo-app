import * as React from "react"
import {
  Caption as ReactNativeCaption,
  Headline as ReactNativeHeadline,
  Paragraph as ReactNativeParagraph,
  Subheading as ReactNativeSubheading,
  Text as ReactNativeText,
  Title as ReactNativeTitle,
} from "react-native-paper"
import { TextProps } from "./text.props"
import { translate } from "../../i18n"
import { flatten, mergeAll } from "ramda"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
enum TextType {text, subheading, title, paragraph, headline, caption}

export function BaseText(type: TextType, props: TextProps) {
  // grab the props
  const { tx, txOptions, text, children, style: styleOverride, ...rest } = props

  // figure out which content to use
  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const style = mergeAll(flatten([styleOverride]))
  let Comp = ReactNativeText
  switch (type) {
    case TextType.caption:
      Comp = ReactNativeCaption
      break
    case TextType.subheading:
      Comp = ReactNativeSubheading
      break
    case TextType.title:
      Comp = ReactNativeTitle
      break
    case TextType.headline:
      Comp = ReactNativeHeadline
      break
    case TextType.paragraph:
      Comp = ReactNativeParagraph
      break
  }
  return (
    <Comp {...rest} style={style}>
      {content}
    </Comp>
  )
}

export const Text = (props: TextProps) => BaseText(TextType.text, props)

export const Caption = (props: TextProps) => BaseText(TextType.caption, props)

export const HeadLine = (props: TextProps) => BaseText(TextType.headline, props)

export const Paragraph = (props: TextProps) => BaseText(TextType.paragraph, props)

export const Subheading = (props: TextProps) => BaseText(TextType.subheading, props)

export const Title = (props: TextProps) => BaseText(TextType.title, props)
