import React  from 'react'
import { Upload, UploadProps } from './upload'
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import Icon from '../Icon/icon'

export default {
  title: 'Example/Upload',
  component: Upload,
} as Meta;

const Template: Story<UploadProps> = (args) => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action('changed')}
      onRemove={action('removed')}
      name="fileName"
      multiple
      drag>
      <Icon icon="upload" size="5x" theme="secondary" />
      <br/>
      <p>Drag file over to upload</p>
    </Upload>
  )
}

export const defualtUpload = Template.bind({});
defualtUpload.storyName = '上传'
