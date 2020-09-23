import React, { Component } from 'react';
import { Layout } from 'antd';
import HeadNav from '../seventeen/headNav'
import LeftNotice from './leftNotice'
import { Empty } from 'antd';
import { Spin } from 'antd';
import '../css/myNews.css'
const {Header,Sider,Content} = Layout;
export default class MyNews extends Component {
    constructor(){
        super()
        this.state={
            isshow:'block',
            isloading:'none'
        }
    }
    handleClick() {
        this.setState({
            isshow:'none',
            isloading:'block'
        })
    }
    render() {
        return (
            <>
            <Layout>
            <Header style={{padding:0}}><HeadNav/></Header>
            </Layout>
            <Layout>
                <Sider style={{minHeight:'689px'}}><LeftNotice></LeftNotice></Sider>
                <Content>
                    <div style={{width:"100%",height:'100px',textAlign:'center',display:this.state.isshow}}>
                    <Empty style={{marginTop:'20px'}} 
                       description={<span>暂无消息哦！</span>}>
                       </Empty>
                       <div
                       style={{width:'100%',
                        fontSize:'12px',
                        backgroundColor:'#888',
                        opacity:'0.7',
                        height:'20px',
                        margin:'5px 0px',
                        textAlign:'center',
                        lineHeight:'20px'}}
                        onClick={this.handleClick.bind(this)}
                       >点击加载更多哟</div>
                    </div>
                    <Spin size="large"  style={{display:this.state.isloading,marginTop:'20px'}}></Spin>
                </Content>
            </Layout>
            </>
        );
    }
}