import React from 'react'
import { Layout } from 'antd';
import HeadNav from '../seventeen/headNav'

import RingletMain from "./RingletMain"
const {Header,Content} = Layout;
export default class SmallCircle extends React.Component {
    render(){
        return (
            <>
            <Layout>
                <Header style={{padding:0}}><HeadNav/></Header>
            </Layout>
            <Layout>
                <Content><RingletMain></RingletMain></Content>
            </Layout>
            <div>小圈</div>
            </>
        )
    }
}