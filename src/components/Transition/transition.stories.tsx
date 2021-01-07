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
    margin: 0 auto;
  }
  .story-transition-wrapper {
    display: flex;
  }
  .story-transition-item_wrapper {
    margin-right: 100px;
  }
`)

const Template: Story<TransitionProps> = (args) => {
  const [ show1, setShow1 ] = useState(true)
  const [ show2, setShow2 ] = useState(true)
  const [ show3, setShow3 ] = useState(true)
  const [ show4, setShow4 ] = useState(true)
  return (
    <div className="story-transition-wrapper">
      <div className="story-transition-item_wrapper">
        <Button size="sm" className="mb-3" onClick={ () => setShow1(!show1) }>zoom-in-top</Button>
        <Transition in={show1} animation="zoom-in-top" { ...args }>
          <div className="story-transition-box">
            内容部分
          </div>
        </Transition>
      </div>
      <div className="story-transition-item_wrapper">
        <Button size="sm" className="mb-3" onClick={ () => setShow2(!show2) }>zoom-in-bottom</Button>
        <Transition in={show2} animation="zoom-in-bottom" { ...args }>
          <div className="story-transition-box">
            内容部分
          </div>
        </Transition>
      </div>
      <div className="story-transition-item_wrapper">
        <Button size="sm" className="mb-3" onClick={ () => setShow3(!show3) }>zoom-in-left</Button>
        <Transition in={show3} animation="zoom-in-left" { ...args }>
          <div className="story-transition-box">
            内容部分
          </div>
        </Transition>
      </div>
      <div className="story-transition-item_wrapper">
        <Button size="sm" className="mb-3" onClick={ () => setShow4(!show4) }>zoom-in-right</Button>
        <Transition in={show4} animation="zoom-in-right" { ...args }>
          <div className="story-transition-box">
            内容部分
          </div>
        </Transition>
      </div>
    </div>
  )
}

export const transitionDefault = Template.bind({});
transitionDefault.args = {
  timeout: 300,
};
transitionDefault.storyName = '动画'
