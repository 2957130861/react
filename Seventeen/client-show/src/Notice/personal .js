import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import HeadNav from '../seventeen/headNav';
import { Input, Space } from 'antd';
import { EditOutlined, FormOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import LeftNotice from './leftNotice'
import "../css/personal.css"
import cookie from 'react-cookies'
import axios from 'axios';
const { Header, Sider, Content } = Layout;
export default class Person extends Component {
    constructor() {
        super()
        this.state = {
            isshow: 'block',
            isloading: 'none',
            pseudonymShow: 'none',
            pseudonym1: '',
            pseudonym2: '',
            nowpseudonym: cookie.load('pseudonym'),
            headPhoto:cookie.load('headPhoto')
        }
    }
    //图片上传监控
    uploadUser(){
       let file = document.querySelector(".file").files[0];
       let formData = new FormData();
       formData.append("uploadUser",file,file.name);
       formData.append("id",cookie.load('id'));
       const config = {
        headers: {
          "Content-Type": "mutipart/form-data;boundary=" + new Date().getTime(), //Content-Type来表示具体请求中的媒体类型信息。
        },
      }
       axios.post("http://localhost:7001/uploadUser",formData,config)
       .then(res=>{
           this.setState({
               headPhoto:res.data
           })
           cookie.save('headPhoto',res.data)
       }).catch(err=>{
           console.log("图片上传失败")
       })
    }
    handleClick() {
        this.setState({
            isshow: 'none',
            isloading: 'block'
        })
    }
    pseudonymChange() {
        this.setState({
            pseudonymShow: 'block'
        })
    }
    pseudonymcancel() {
        this.setState({
            pseudonymShow: 'none'
        })
    }
    pseudonymsave() {
        console.log(this.state.pseudonym1, this.state.pseudonym2)
        axios.post("http://localhost:7001/changePseudonym", {
            id: cookie.load('id'),
            pseudonym: this.state.pseudonym2
        }).then(res => {
            this.setState({
                pseudonymShow: 'none',
                nowpseudonym: this.state.pseudonym2
            })
        }).catch(err => {
            console.log("修改失败")
        })
    }
    //监控原笔名的值
    pseudonym1(e) {
        this.setState({
            pseudonym1: e.target.value
        })
    }
    //监控新笔名的值
    pseudonym2(e) {
        this.setState({
            pseudonym2: e.target.value
        })
    }
    render() {
        const { pseudonymShow, nowpseudonym } = this.state;
        const {headPhoto} = this.state;
        return (
            <>
                <Layout>
                    <Header style={{ padding: 0 }}><HeadNav /></Header>
                </Layout>
                <Layout>
                    <Sider style={{ minHeight: '689px' }}><LeftNotice></LeftNotice></Sider>
                    <Content>
                        <div style={{ margin: "20px" }}>
                            <div style={{ color: 'rgb(51, 51, 51)', margin: '20px 0' }}>
                                <div className="personal-change">
                                    <EditOutlined style={{ marginRight: '10px' }} />
                                修改笔名
                            </div>
                                <div className="changeName">
                                    现笔名：
                                        <span style={{ marginRight: 10 }}>{nowpseudonym}</span>
                                    <FormOutlined style={{ marginRight: '10px' }} onClick={this.pseudonymChange.bind(this)} />
                                修改
                            </div>
                            </div>
                            <div style={{ color: 'rgb(51, 51, 51)', margin: '20px 0' }}>
                                <div className="personal-change">
                                    <UserOutlined style={{ marginRight: '10px' }} />
                                修改头像
                            </div>
                                <div className='imgDiv'>
                                    <img className="failimg" src={headPhoto} />
                                    <div className="imgchoice">
                                        <a href="#" className="choose">
                                                        选择文件
                                        <input type="file" className="file" />
                                         </a>
                                         <button className='uploadUser' onClick={this.uploadUser.bind(this)}>确认上传</button>
                                        <div style={{ marginTop: '10px', color: '403c3c' }}>*图片格式： .jpg / .png</div>
                                    </div>
                                </div>
                                <div className="pseudonymShow" style={{ display: pseudonymShow }}>
                                    <div className="pseudonymBox">
                                        <div className='pseudonymText'>修改笔名</div>
                                        <Input className="login_ipt" placeholder="请输入原笔名" onChange={(e) => this.pseudonym1(e)} />
                                        <Input className="login_ipt" placeholder="请输入现笔名" onChange={(e) => this.pseudonym2(e)} />
                                        <button className="cancel_btn" onClick={this.pseudonymcancel.bind(this)}>取消</button>
                                        <button className="save_btn" onClick={this.pseudonymsave.bind(this)}>保存</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </>
        );
    }
}