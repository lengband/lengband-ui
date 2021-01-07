import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Menu, MenuProps } from './menu';
import MenuItem from './menuItem'
import SubMenu from './subMenu'
import Icon from '../Icon'

export default {
  title: 'Example/Menu',
  component: Menu,
  subcomponents: { MenuItem, SubMenu },
} as Meta;

const Template: Story<MenuProps> = (args) => (
  <Menu {...args} style={{ marginBottom: '200px'}}>
    <MenuItem><Icon icon="briefcase" /> 菜单1</MenuItem>
    <MenuItem><Icon icon="dumpster" /> 菜单2</MenuItem>
    <MenuItem><Icon icon="feather" /> 菜单3</MenuItem>
    <SubMenu title="sub menu">
      <MenuItem><Icon icon="grin-alt" /> 菜单1</MenuItem>
      <MenuItem><Icon icon="grin-hearts" /> 菜单2</MenuItem>
      <MenuItem><Icon icon="grin-tongue-wink" /> 菜单3</MenuItem>
    </SubMenu>
  </Menu>
)
export const example = Template.bind({});
example.storyName = '菜单'
