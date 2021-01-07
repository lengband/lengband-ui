import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/react/types-6-0';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>按钮</Button>;
export const btn = Template.bind({});
btn.args = {
  btnType: 'primary',
};
btn.storyName = '默认'

export const allSizeBtn = () => {
  return (
    <>
      <Button className="mr-3">按钮</Button>
      <Button className="mr-3" btnType="primary">按钮</Button>
      <Button className="mr-3" btnType="danger">按钮</Button>
      <Button className="mr-3" btnType="link" href="/?path=/docs/example-button--all-size-btn">按钮</Button>
    </>
  )
}
allSizeBtn.storyName = '不同类型的按钮'


export const allTypeBtn = () => {
  return (
    <>
      <Button className="mr-3" size="sm">按钮</Button>
      <Button className="mr-3">按钮</Button>
      <Button className="mr-3" size="lg">按钮</Button>
    </>
  )
}
allTypeBtn.storyName = '不同尺寸的按钮'
