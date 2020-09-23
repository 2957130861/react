import React from 'react';
import Head from './Head';
import '../css/Reset.css';
import axios from 'axios';
import { EyeInvisibleOutlined, EyeTwoTone, CloseOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
export default class nav extends React.Component{
    constructor(){
        super()
        this.state={
            password_tip:"",
            password_tip2:""
        }
    }
    phoneChange(e) {
        this.setState({
            phone: e.target.value
        })
    }
    emailChange(e) {
        this.setState({
            email: e.target.value
        })
    }
    pwdChange1(e) {
        this.setState({
            password1: e.target.value
        })
        let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
        if(reg.test(e.target.value)){
            this.state.password_tip = '';
        }else{
            this.state.password_tip = '密码格式不正确'
        }
    }
    pwdChange2(e) {
        this.setState({
            password2: e.target.value
        })
        if(e.target.value == this.state.password1){
            this.state.password_tip2 = '';
        }else{
            this.state.password_tip2 = '请确保两次密码输入一致'
        }
    }
    reset(){
        console.log(this.state.phone,this.state.email,this.state.password1,this.state.password2)
        axios.post("http://127.0.0.1:7001/changePwd",{
            phone:this.state.phone,
            email:this.state.email,
            password:this.state.password1
        }).then(res=>{
            alert("密码修改成功")
        }).catch(err=>{
            alert("密码修改失败")
        })
    }
    render(){
        const { password_tip} = this.state;
        const { password_tip2} = this.state;
        return(
            <div>
                <Head/>
                <div className="reset_middle">
                    <div className="mmddlie">
                        <div className="line"></div>
                        <div className="divText">重置密码</div>
                        <div className="reset_ipt">
                            <Input className="login_ipt reset_phone" placeholder="已注册手机号码" onChange={(e) => this.phoneChange(e)}/><br/>
                            <Input className="login_ipt" placeholder="已注册邮箱号码" onChange={(e) => this.emailChange(e)}/>
                            <Space direction="vertical">
                                <Input.Password
                                    placeholder="请输入密码(6-16位英文字母和数字)"
                                    onChange={(e) => this.pwdChange1(e)}
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Space>
                            <div className="tip">{password_tip}</div>
                            <Space direction="vertical">
                                <Input.Password
                                    placeholder="重复输入密码"
                                    onChange={(e) => this.pwdChange2(e)}
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Space>
                            <div className="tip">{password_tip2}</div>
                            <button className="login_btn" onClick={this.reset.bind(this)}>重置</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}