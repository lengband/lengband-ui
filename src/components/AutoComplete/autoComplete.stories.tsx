import React from 'react'
import { Story, Meta } from '@storybook/react';
import { AutoComplete, AutoCompleteProps } from './autoComplete'

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
} as Meta;

const Template: Story<AutoCompleteProps> = (args) => <AutoComplete {...args} />;
export const defualtAutoComplete = Template.bind({});
defualtAutoComplete.args = {
  fetchSuggestions: (query: string) => {
    const lakersWithNumber = [
      {value: 'bradley', number: 11},
      {value: 'pope', number: 1},
      {value: 'caruso', number: 4},
      {value: 'cook', number: 2},
      {value: 'cousins', number: 15},
      {value: 'james', number: 23},
      {value: 'AD', number: 3},
      {value: 'green', number: 14},
      {value: 'howard', number: 39},
      {value: 'kuzma', number: 0},
    ]
    return lakersWithNumber.filter(player => player.value.includes(query))
  }
}
defualtAutoComplete.storyName = '自动完成'
