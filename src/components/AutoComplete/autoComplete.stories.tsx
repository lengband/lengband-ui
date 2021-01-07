import React from 'react'
import { Story, Meta } from '@storybook/react';
import { AutoComplete, AutoCompleteProps } from './autoComplete'

export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
} as Meta;

const Template: Story<AutoCompleteProps> = (args) => <AutoComplete style={{ marginBottom: '300px' }} {...args} />;
export const defualtAutoComplete = Template.bind({});
defualtAutoComplete.args = {
  fetchSuggestions: (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        console.log(items)
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
      })
  }
}
defualtAutoComplete.storyName = '自动完成'
defualtAutoComplete.parameters = {
  // 替换全局的配置，忽略onChange的事件捕获，要不然story会把autoComplete传递给Input的onChange事件截取成他们action的事件
  actions: { argTypesRegex: "" },
}
