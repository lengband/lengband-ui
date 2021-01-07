import React from 'react'
import { Story, Meta } from '@storybook/react';
import { Input, InputProps } from './input'

export default {
  title: 'Example/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;
export const defualtInput = Template.bind({});
defualtInput.storyName = '输入框'
