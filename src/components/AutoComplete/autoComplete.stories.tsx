import React from 'react'
import { Story, Meta } from '@storybook/react';
import { AutoComplete, AutoCompleteProps } from './autoComplete'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
} as Meta;

const Template: Story<AutoCompleteProps> = (args) => <AutoComplete style={{ marginBottom: '300px' }} onSelect={action('selected')} onChange={action('changed')} {...args} />;
export const defualtAutoComplete = Template.bind({});
defualtAutoComplete.args = {
  fetchSuggestions: (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items = [] }) => {
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
      })
  }
}
defualtAutoComplete.storyName = '自动完成'
