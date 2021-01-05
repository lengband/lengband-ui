import React, { FC, useState, createContext, CSSProperties } from 'react'
import classNames from 'classnames'
import { TabItemProps } from './tabItem'

type typeEnum = 'line' | 'card'

export interface TabProps {
  defaultIndex?: string,
  type?: typeEnum,
  style?: CSSProperties;
  className?: string;
  onSelect?: (selectedIndex: string) => void;
}

interface TabItemContext {
  index: string,
  onSelect?: (selectedIndex: string) => void;
  type?: typeEnum;
  defaultIndex?: string,
}

export const TabContext = createContext<TabItemContext>({index: '0'})
console.log(TabContext, 'TabContext');

export const Tab: FC<TabProps> = props => {
  const { className, type, style, children, defaultIndex, onSelect } = props
  const [ currentActive, setActive ] = useState(defaultIndex)
  const classes = classNames('tab', className, {
    'tab-line': type === 'line',
    'tab-card': type === 'card',
  })
  const handleClick = (index: string) => {
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }
  const passedContext: TabItemContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    type,
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<TabItemProps>
      const { displayName } = childElement.type
      console.log({ childElement, displayName });
      if (displayName === 'TabItem') {
        return React.cloneElement(childElement, {
          index: index.toString()
        })
      } else {
        console.error("Warning: Tab has a child which is not a TabItem component")
      }
    })
  }
  return (
    <ul className={classes} style={style} data-testid="test-tab">
      <div className="tab-container">
        <TabContext.Provider value={passedContext}>
          {renderChildren()}
        </TabContext.Provider>
      </div>
    </ul>
  )
}

Tab.defaultProps = {
  type: 'line',
  defaultIndex: '0'
}

export default Tab