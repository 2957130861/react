import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

export default class Leftnav extends React.Component{
  constructor(){
    super();
    this.state={

    }

  }

  handleClick = e=>{
    this.props.getkey.changekey(e.key)
    
  };

  render(){
    return(
      <Menu
        onClick={this.handleClick.bind(this)}
        style={{ width: 200 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <MailOutlined />
              <span>用户信息管理</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">普通用户信息管理</Menu.Item>
            <Menu.Item key="2">管理员信息管理</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">做书信息管理</Menu.Item>
            <Menu.Item key="4">私密写管理</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    )
  }
}
