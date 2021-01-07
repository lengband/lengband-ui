import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Alert, BaseAlertProps } from './alert';

export default {
  title: 'Example/Alert',
  component: Alert,
} as Meta;

const Template: Story<BaseAlertProps> = (args) => <Alert {...args}>按钮</Alert>;

export const Title = Template.bind({});
Title.args = {
  title: 'title1',
};
Title.storyName = '警告'

// export const WithDescription = Template.bind({});
// WithDescription.args = {
//   title: 'title2',
//   description: 'Additional description and informations about copywriting.'
// };

// export const WithCloseable = Template.bind({});
// WithCloseable.args = {
//   title: 'title3',
//   description: 'Additional description and informations about copywriting.',
//   closeable: true,
// };

