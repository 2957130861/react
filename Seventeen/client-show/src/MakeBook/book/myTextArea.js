import React, { Component } from 'react'
import { message } from 'antd';
import { connect } from 'react-redux'

message.config({
    duration: 1,
});

class MyTextArea extends Component {

    constructor() {
        super();
        this.text = "";

    }
    componentDidMount() {
        document.querySelector("#mytext").value = sessionStorage.booktext ? sessionStorage.booktext : "";
    }

    setHight = e => {
        e.target.style.height = e.target.scrollHeight + "px";
    }

    changeEvent = (e) => {
        this.text = e.target.value;
        this.props.sendAction('setText', this.text);

        if (this.text.length > 300) {
            message.error(`字数${this.text.length}>300`);
        }
    }

    render() {
        return (
            <>
                <textarea className={this.props.myname} id="mytext"
                    onChange={this.changeEvent}
                />
            </>
        )
    }
}
//dispatch是一个函数
function mapDispatchToProps(dispatch) {
    return {
        sendAction: (type, text) => {
            //发送数据, 会触发reducer函数的执行
            dispatch({ type: type, text: text });
        }
    }
}
//参数1：取数据
//参数2：改数据
export default connect(null, mapDispatchToProps)(MyTextArea)