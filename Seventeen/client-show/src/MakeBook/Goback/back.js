import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import cookie from 'react-cookies';

import { ArrowLeftOutlined } from '@ant-design/icons';
import axios from 'axios';
import "./back.css"
import logo from "../../img/logo.png"

import { Modal, Input, message } from 'antd';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            visible: false
        }
        this.title = "";
    }
    componentDidMount(){
        if(sessionStorage.getItem("show")){
            document.querySelector(".headerRight").style.display="none";
        }else{
            document.querySelector(".headerRight").style.display="flex";
        }
    }
    CompleteBook = () => {
        if ((this.props.file !== '' && this.props.text !== '')||(sessionStorage.getItem("bookimg")!=""&&sessionStorage.getItem("booktext")!="")) {
            this.setState({
                visible: true,
            });
        }
        else {
            return message.error("请先完善图片或者描述!");
        }
    }

    checkTitle = (e) => {
        this.title = e.target.value;
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        if (this.title) {
            cookie.save('userId', sessionStorage.getItem("userid")?sessionStorage.getItem("userid"):1);
            let userId = cookie.load('userId');
            let formdate = new FormData();
            formdate.append("file", this.props.file);
            formdate.append("text", this.props.text);
            formdate.append("userId", userId);
            formdate.append("title", this.title);
            let date = new Date();
            let time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            formdate.append("time", time);
            formdate.append("booksid", sessionStorage.getItem('booksid'));
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
                }
            };
            axios.post("http://localhost:7001/BookUpload", formdate, config).then(res => {
                message.success("保存成功!");
            });
            this.setState({
                visible: false,
            });
        } else {
            message.error("请输入标题");
        }
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <>
                <div className="header">
                    <div className="headerLeft">
                        <div className="headerLogo">
                            <img src={logo} title="seventeen" alt="seventeen" />
                        </div>
                        <Link to="/makebook">
                            <div className="goback">
                                <div><ArrowLeftOutlined /></div>
                                <span>返回上层</span>
                            </div>
                        </Link>
                    </div>
                    <div className="headerRight" >
                        <button className="button share" onClick={this.CompleteBook} style={{ display: this.props.myButton }}>完成书籍</button>
                        <button className="button print" style={{ display: this.props.myButton }}>打印书籍</button>
                    </div>
                </div>
                <Modal
                    title="请输入标题"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText="取消"
                    okText="确定"
                >
                    <Input placeholder="请输入20个字以内的标题" onChange={this.checkTitle} />
                </Modal>
            </>
        )
    }
}

function mapStatetoProps(state) {
    return state;
}
export default connect(mapStatetoProps, null)(Header);