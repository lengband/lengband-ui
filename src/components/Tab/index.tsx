import { FC } from 'react'
import Tab, { TabProps } from './tab'
import TabItem, { TabItemProps } from './tabItem'

export type IMenuComponent = FC<TabProps> & {
  Item: FC<TabItemProps>,
}
const TransTab = Tab as IMenuComponent

TransTab.Item = TabItem

export default TransTab