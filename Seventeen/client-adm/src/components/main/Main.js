import React from 'react';
import HeadNav from "../topnav/headNav"
import LeftNav from "../leftnav/LeftNav"
import Righttable from "../righttable/Righttable"
import "./Main.css"
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


const type2 = [
  {
    title: 'id',
    width: 100,
    dataIndex: 'id',
    key: 'id',
    fixed: 'left',
  },
  {
    title: '笔名',
    width: 100,
    dataIndex: 'penbook',
    key: 'penbook',
    fixed: 'left',
  },
  {
    title: '电话号码',
    dataIndex: 'phone',
    key: 'phone',
    width: 150,
  },
  {
    title: '邮件地址',
    dataIndex: 'email',
    key: 'email',
    width: 150,
  },
  {
    title: '管理员',
    dataIndex: 'isroot',
    key: 'isroot',
    width: 150,
  },
  {
    title: '管理员',
    dataIndex: 'isroot',
    key: 'isroot',
    width: 150,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];
 export default  class Main extends React.Component{
    constructor(){
      super()
      this.state={
        current: 'mail',
        index:"",
        key:1,
      }
    }
   
    changekey(key){
      this.setState({
        key:key
      })
      console.log(this.state.key);
    }
   
    render(){
      return (
        <Layout>
      <Header style={{"background":"white"}}>
       <HeadNav></HeadNav>
      </Header>
      <Layout>
        <Sider style={{"background":"#f4f4f9"}}>
          <LeftNav getkey={this}></LeftNav>
        </Sider>
        <Content style={{"minHeight":"500px"}}>
          <div className="tablecontent">
          <Righttable page={this.state.key} ></Righttable>
          </div>
        </Content>
      </Layout>
      
    </Layout>
          )
    }
 }