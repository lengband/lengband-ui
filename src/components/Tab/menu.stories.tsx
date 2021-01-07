import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Tab, TabProps } from './tab';
import TabItem from './tabItem'
import Icon from '../Icon'

export default {
  title: 'Example/Tab',
  component: Tab,
  subcomponents: { TabItem },
} as Meta;

const Template: Story<TabProps> = (args) => (
  <Tab {...args}>
    <TabItem> 菜单1</TabItem>
    <TabItem><Icon icon="dumpster" /> 菜单2</TabItem>
    <TabItem><Icon icon="feather" /> 菜单3</TabItem>
  </Tab>
)
export const example = Template.bind({});
example.storyName = '标签页'
