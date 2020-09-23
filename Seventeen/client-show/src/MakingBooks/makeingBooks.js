import React from 'react'
import { Layout } from 'antd';
import HeadNav from '../seventeen/headNav'
const {Header} = Layout;
export default class MakingBooks extends React.Component {
    render(){
        return (
            <>
            <Layout>
            <Header style={{padding:0}}><HeadNav/></Header>
            </Layout>
            <div>做书/印品</div>
            </>
        )
    }
}