import React from 'react';
import Button from './components/Button/button'
import Alert from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Tab from './components/Tab/tab'
import TabItem from './components/Tab/tabItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  return (
    <div className="App">
      <Button>learn react</Button>
      <hr/>
      <Alert
        title="我是title"
        size="sm"
        type="danger"
        description="sadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafeewfewfhnuiowefhjeowihfoiuwjrehfoiwehrfoiuwehtfuioewhfiohwjefoi iiihrfoiwehjfiowej fopi pje wj foj"
        closeale/>
      <hr/>
      <Menu>
        <MenuItem>菜单1</MenuItem>
        <MenuItem>菜单2</MenuItem>
        <MenuItem>菜单3</MenuItem>
        <SubMenu title="sub menu">
          <MenuItem>菜单1</MenuItem>
          <MenuItem>菜单2</MenuItem>
          <MenuItem>菜单3</MenuItem>
        </SubMenu>
      </Menu>

      <Tab>
        <TabItem>菜单1</TabItem>
        <TabItem>菜单2</TabItem>
        <TabItem>菜单3</TabItem>
      </Tab>
      <hr/>

      <Tab type="card">
        <TabItem>菜单1</TabItem>
        <TabItem>菜单2</TabItem>
        <TabItem>菜单3</TabItem>
      </Tab>

      <hr/>

      <FontAwesomeIcon icon='arrow-down' />
    </div>
  );
}

export default App;
