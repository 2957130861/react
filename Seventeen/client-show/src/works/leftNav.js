import React from 'react'
import { Menu } from 'antd';

export default class LeftNav extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    handleClick = e => {
      this.props.propsKey.changeKey(e.key)
      console.log(e)
    };
  
    render() {
      return (
        <Menu
          onClick={this.handleClick}
          style={{width: 201 ,
            minHeight:'100%',
            background:'rgb(244, 244, 249)',
            padding: '38px 0px'}}
          mode="inline"
        >
            <Menu.Item key="1">自己的书</Menu.Item>
            <Menu.Item key="2">和朋友的书</Menu.Item>
            <Menu.Item key="3">lomo卡</Menu.Item>
            <Menu.Item key="4">拾柒历</Menu.Item>
        </Menu>
      );
    }
  }
  
