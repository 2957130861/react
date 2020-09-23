import React from 'react'
import { Layout,Avatar,Button   } from 'antd';
import HeadNav from '../seventeen/headNav'
import { UserOutlined } from '@ant-design/icons';
import '../css/memberCenter.css'
import MemberImg from '../img/member.jpg'
import cookie from 'react-cookies'
const {Header,Sider,Content} = Layout;
export default class MemberCenter extends React.Component {
    constructor(){
        super()
        this.state={
            MemberImg1:cookie.load('headPhoto')
        }
    }
    render(){
        return (
            <>
            <Layout>
            <Header style={{padding:0}}><HeadNav/></Header>
            </Layout>
            <Layout>
                <Sider
                    style={{background:'rgb(244, 244, 249)',
                    width: '200px',
                    textAlign:"center"    
                }}
                >
                <Avatar src={this.state.MemberImg1} size={64} style={{cursor:"pointer",marginTop:"100px"}}  icon={<UserOutlined />}/>
                <p className="memberName">用户名</p>
                <p className="memberName">你还不是会员</p>
                <Button type="primary" 
                style={{color:"rgb(203, 173, 101)",
                backgroundColor:'#403c3c',
                borderColor:'#403c3c',
                marginTop:"75px",
                marginBottom:"10px"}}>
                成为会员
                </Button>
                <p className="memberName">升级成为会员享更多优惠</p>
                </Sider>
                <Content>
                    <div className="memberC">
                        <h1>
                            拾柒会员权利
                            <span>（ 可上传更多图片、音视频 | 音视频时长增加 ）</span>
                        </h1>
                        <p>会员特权</p>
                        <img src={MemberImg}/>
                        <p>更多会员敬请期待~</p>
                    </div>
                </Content>
            </Layout>
            </>
        )
    }
}