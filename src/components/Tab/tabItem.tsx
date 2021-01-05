import React, { FC, useContext, CSSProperties } from 'react'
import classNames from 'classnames'
import { TabContext } from './tab'

export interface TabItemProps {
  index?: string;
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
}

const TabItem: FC<TabItemProps> = props => {
  const { index, disabled, className, style, children } = props
  const context = useContext(TabContext)
  const classes = classNames('tab-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })
  const handleClick = () => {
    if (context.onSelect && !disabled && (typeof index === 'string')) {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

TabItem.displayName = 'TabItem'
export default TabItem
