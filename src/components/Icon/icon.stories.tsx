import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Icon, IconProps } from './icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default {
  title: 'Example/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const coffice = Template.bind({});
coffice.args = {
  icon: 'address-book',
};
