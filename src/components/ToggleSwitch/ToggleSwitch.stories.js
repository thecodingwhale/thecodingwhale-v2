import React from 'react'
import Template from '../Template/Template'
import { default as ComponentToggleSwitch } from './ToggleSwitch'

export default {
  title: 'ToggleSwitch',
  component: ComponentToggleSwitch,
}

export const Light = () => {
  return (
    <Template mode="light">
      <ComponentToggleSwitch title="Sample Text" size="small" />
      <ComponentToggleSwitch title="Sample Text" size="medium" />
      <ComponentToggleSwitch title="Sample Text" size="large" />
    </Template>
  )
}

export const Dark = () => {
  return (
    <Template mode="dark">
      <ComponentToggleSwitch title="Sample Text" size="small" />
      <ComponentToggleSwitch title="Sample Text" size="medium" />
      <ComponentToggleSwitch title="Sample Text" size="large" />
    </Template>
  )
}
