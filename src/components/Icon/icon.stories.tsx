/* eslint-disable */
import React, { CSSProperties, StyleHTMLAttributes } from 'react';
import { Story, Meta } from '@storybook/react';
import { Icon, IconProps } from './icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { loadCssCode } from '../../utils/styles'

library.add(fas)
delete fas.faFontAwesomeLogoFull
const iconList = Object.values(fas).map(item => item.iconName)

export default {
  title: 'Example/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const addressBook = Template.bind({});
addressBook.args = {
  icon: 'address-book',
};
addressBook.storyName = '默认'


loadCssCode(`
  .story-icon-wrap {
    display: flex;
    flex-wrap: wrap;
  }
  .story-icon-item {
    margin: 2px 2px;
    cursor: pointer;
    font-size: 36px;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: all .3s ease-in-out,background-color .3s ease-in-out;
  }
  .story-icon-item:hover {
    background-color: #0d6efd;
    color: #fff;
    transform: scale(1.1);
  }
`)
const onCopy = (text: string) => alert(`复制成功！🎉🎉🎉 \n ${text}`)
export const allIcon = () => {
  return (
    <div className="story-icon-wrap">
      { iconList.map((iconName, i) => {
        const text = `<Icon icon="${iconName}" />`
        return (
          <CopyToClipboard key={i} text={ text } onCopy={() => onCopy(text)}>
            <div className="story-icon-item">
              <Icon icon={iconName} />
            </div>
          </CopyToClipboard>
        )
      }) }
    </div>
  )
}

allIcon.storyName = '所有图标'

