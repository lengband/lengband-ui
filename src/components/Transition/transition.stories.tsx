import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Transition, { TransitionProps } from './transition'
import { loadCssCode } from '../../utils/styles'
import Button from '../Button'

export default {
  title: 'Example/Transition',
  component: Transition,
} as Meta;

loadCssCode(`
  .story-transition-box {
    width: 100px;
    height: 100px;
    background-color: #0d6efd;
    color: #fff;
    line-height: 100px;
    text-align: center;
  }
`)

const Template: Story<TransitionProps> = (args) => {
  const [ show, setShow ] = useState(true)
  return (
    <>
      <Button className="mb-3" onClick={ () => setShow(!show) }>点击我</Button>
      <Transition in={show} { ...args }>
        <div className="story-transition-box">
          内容部分
        </div>
      </Transition>
    </>
  )
}

export const transitionDefault = Template.bind({});
transitionDefault.args = {
  timeout: 300,
  animation: 'zoom-in-top'
};
transitionDefault.storyName = '默认'
