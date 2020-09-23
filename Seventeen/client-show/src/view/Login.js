import React from 'react';
import '../css/Login.css';
import { Link } from "react-router-dom";
import { Input, Space, Radio } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, CloseOutlined } from '@ant-design/icons';
import axios from 'axios';
import cookie from 'react-cookies'
export default class nav extends React.Component {
    constructor() {
        super();
        this.state = {
            isHidden: 'block',
            isRegister: 'none',
            isLogin: 'none',
            phone_tip:'',
            email_tip:'',
            pseudonym_tip:'',
            password_tip:'',
            verifCode:'',
            verifCode_tip:''
        }
    }
    change1() {
        this.setState({
            isHidden: 'block',
            isRegister: 'none',
        })
    }
    change2() {
        this.setState({
            isRegister: 'block',
            isHidden: 'none'
        })
    }
    //取消login按钮
    cancle() {
        this.setState({
            isLogin: 'none'
        })
    }
    //登陆按钮
    login() {
        axios.post("http://localhost:7001/login", {
            phone: this.state.phone,
            password: this.state.password,
            email: this.state.email
        }).then(res => {
            console.log(res.data);
            cookie.save('pseudonym',res.data.list[0].pseudonym)
            cookie.save('id',res.data.list[0].id)
            cookie.save('headPhoto',res.data.list[0].headPhoto)
            this.props.history.push({pathname:'/private'})
        }).catch(err => {
            console.log("登陆失败")
        })
    }
    //注册按钮
    register() {
        axios.post("http://localhost:7001/register", {
            phone: this.state.phone1,
            password: this.state.password1,
            email: this.state.email1,
            pseudonym: this.state.pseudonym1,
            isroot: 0
        }).then(res => {
            alert("注册成功")
            this.setState({
                isRegister: 'none',
                isHidden: 'none',
                isHidden: 'block',
            })
        }).catch(err => {
            alert("注册失败")
        })
    }
    //监听登陆中手机号的值
    phoneChange(e) {
        this.setState({
            phone: e.target.value
        })
    }
    //监听登陆中邮箱的值
    emailChange(e) {
        this.setState({
            email: e.target.value
        })
    }
    //监听登陆中密码的值
    pwdChange(e) {
        this.setState({
            password: e.target.value
        })
    }
    //监听注册中手机号的值
    phoneRegister(e) {
        this.setState({
            phone1: e.target.value
        })
        let reg = /^1[3-9]\d{9}$/;
        if (reg.test(e.target.value)) {
            this.state.phone_tip = '';
        } else {
            this.state.phone_tip = '手机号码格式不对';
        }
    }
    //监听注册中邮箱的值
    emailRegister(e) {
        this.setState({
            email1: e.target.value
        })
        let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if(reg.test(e.target.value)){
            this.state.email_tip = '';
        }else {
            this.state.email_tip = '邮箱格式不对';
        }
    }
    //监听注册中密码的值
    pwdRegister(e) {
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
    pwdRegister2(e) {
        this.setState({
            password2: e.target.value
        })
        if(e.target.value == this.state.password1){
            this.state.password_tip2 = '';
        }else{
            this.state.password_tip2 = '请确保两次密码输入一致'
        }
    }
    pseudonymRegister(e) {
        this.setState({
            pseudonym1: e.target.value
        })
        if(e.target.value){
            this.state.pseudonym_tip = '';
        }else {
            this.state.pseudonym_tip = "笔名不能为空"
        }
    }
    //监听手机验证码
    numChange(e) {
        this.setState({
            num: e.target.value
        })
        if(e.target.value == this.state.verifCode){
            this.state.verifCode_tip = '';
        }else{
            this.state.verifCode_tip = '验证码与发送的不匹配'
        }
    }
    //监听记住我
    checkchange(e){
        console.log(e.target.checked)
        cookie.save('phone',this.state.phone)
        cookie.save('password',this.state.password)
        cookie.save('email',this.state.email)
    }
    //获取验证码
    num(){
        console.log(this.state.phone1)
        axios.post("http://127.0.0.1:7001/smsVerif",{
            phone:this.state.phone1,
        }).then(res=>{
            let r = res.data;
            this.state.verifCode = r.verifCode;
        }).catch(err=>{
            console.log("短信验证码发送失败")
        })
    }
    
    render() {
        const { isHidden } = this.state;
        const { isRegister } = this.state;
        const { isLogin } = this.state;
        const { pseudonym_tip} = this.state;
        const { email_tip} = this.state;
        const { phone_tip} = this.state;
        const { password_tip} = this.state;
        const { password_tip2} = this.state;
        const { verifCode_tip} = this.state;
        this.state.isLogin = this.props.isLogin;
        return (
            <div className="login_fixed" style={{ display: isLogin }}>
                <div className="login" >
                    <div className="login_span">
                        <span className="lSpan1" onClick={this.change1.bind(this)}>密码登陆</span>
                        <span className="lSpan2" onClick={this.change2.bind(this)}>立即注册</span>
                    </div>
                    <div className="login_pwd" style={{ display: isHidden }}>
                        <Input className="login_ipt" placeholder="请输入手机号码" onChange={(e) => this.phoneChange(e)} />
                        <div className="tip">{phone_tip}</div>
                        <Input className="login_ipt" placeholder="请输入邮箱账号" onChange={(e) => this.emailChange(e)} />
                        <div className="tip">{email_tip}</div>
                        <Space direction="vertical">
                            <Input.Password
                                placeholder="请输入密码(6-16位英文字母和数字)"
                                onChange={(e) => this.pwdChange(e)}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Space>
                        <div className="tip">{password_tip}</div>
                        <div className="login_check">
                            {/* <span className="check_span1"><input type="checkbox" onChange={(e)=>this.checkchange(e)}/>记住我</span> */}
                            <span className="check_span1"><Radio onChange={(e)=>this.checkchange(e)}><span className="span_text">记住我</span></Radio></span>
                            <Link to="/reset"><span className="check_span2">忘记密码？</span></Link>
                        </div>
                        <button className="login_btn" onClick={this.login.bind(this)}>登录</button>
                    </div>
                    <div className="register" style={{ display: isRegister }}>
                        <Input className="login_ipt" placeholder="请输入笔名" onChange={(e) => this.pseudonymRegister(e)} />
                        <div className="tip">{pseudonym_tip}</div>
                        <Input className="login_ipt" placeholder="请输入手机号码" onChange={(e) => this.phoneRegister(e)} />
                        <div className="tip">{phone_tip}</div>
                        <Input className="login_ipt" placeholder="请输入邮箱账号" onChange={(e) => this.emailRegister(e)} />
                        <div className="tip">{email_tip}</div>
                        <Input className="login_ipt code_input" placeholder="请输入验证码" onChange={(e) => this.numChange(e)} />
                        <button className="login_btn code_btn" onClick={this.num.bind(this)}>获取验证码</button>
                        <div className="tip">{verifCode_tip}</div>
                        <Space direction="vertical">
                            <Input.Password
                                placeholder="请输入密码(6-16位英文字母和数字)"
                                onChange={(e) => this.pwdRegister(e)}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Space>
                        <div className="tip">{password_tip}</div>
                        <Space direction="vertical">
                            <Input.Password
                                placeholder="请确认密码"
                                onChange={(e) => this.pwdRegister2(e)}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Space>
                        <div className="tip">{password_tip2}</div>
                        <button className="register_btn" onClick={this.register.bind(this)}>注册</button>
                    </div>
                    <CloseOutlined onClick={this.cancle.bind(this)} className="cancel" />
                </div>
            </div>
        )
    }
}