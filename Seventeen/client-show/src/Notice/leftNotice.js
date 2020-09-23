import React from 'react'
import { Menu } from 'antd';
import {Link} from 'react-router-dom'
export default class leftNotice extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    handleClick = e => {
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
            <Menu.Item key="1"><Link to={{pathname:'./myNews'}}>我的消息</Link></Menu.Item>
            <Menu.Item key="2"><Link to={{pathname:'/shoppingCar'}}>个人订单</Link></Menu.Item>
            <Menu.Item key="3">lomo卡</Menu.Item>
            <Menu.Item key="4"><Link to={{pathname:'./personal'}}>个人中心</Link></Menu.Item>
        </Menu>
      );
    }
  }
  
