import React, { Component } from 'react'
import { Layout } from 'antd';
import HeadNav from '../seventeen/headNav'
const {Header} = Layout;
export default class NAv extends Component {
   
    render() {
        return (
            <>
            <Layout>
            <Header style={{padding:0}}><HeadNav/></Header>
            </Layout>
            </>
        )
    }
}
