import React from 'react'
import { Layout } from 'antd';
import LeftNav from './leftNav';
import RightContend from './rightContent';
import HeadNav from '../seventeen/headNav'
const { Header, Sider, Content } = Layout;

export default class Works extends React.Component {
    constructor() {
        super();
        this.state = {
            page:1,
        }
    }
    changeKey(key) {
        this.setState({
            page:key
        })
    }
    render() {
        return (
        <>
        <Layout>
            <Header style={{padding:0}}><HeadNav/></Header>
        <Layout>
            <Sider><LeftNav propsKey={this}/></Sider>
            <Content style={{minHeight:'689px'}}><RightContend page={this.state.page}/></Content>
        </Layout> 
        </Layout>
        </>
        );
    }
} 