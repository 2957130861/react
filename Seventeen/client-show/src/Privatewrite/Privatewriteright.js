import React from 'react';
import axios from 'axios';

export default class Privatewriteright extends React.Component {

    constructor(props) {
        super();
        this.state = {
            Privatewriterightbt: ""
        }
    };
    render() {
        return (
            <div className="Privatewriteright">
                <div className="Privatewriteright-top">
                    <input onChange={(event) => { this.change(event) }} value={this.state.Privatewriterightbt} placeholder="输入文章标题" className="Privatewriteright-top-h" type="text" />
                    <span>
                        <input className="Privatewriteright-top-date" type="date" />
                        <button onClick={this.Privatewritebaocun.bind(this)} className="Privatewriteright-top-bc">保存</button>
                    </span>
                </div>
                <div className="Privatewriteright-bottom">
                    <iframe className="Privatewriteright-html" frameBorder="0" width="100%" height="420px">
                    </iframe>
                </div>
            </div>
        )
    }
    change(e) {
        this.setState({
            Privatewriterightbt: e.target.value
        })
    }
    Privatewritebaocun() {
        let userPrivatewritebt = this.state.Privatewriterightbt
        let userPrivatewritedate = document.querySelector(".Privatewriteright-top-date").value
        let userPrivatewrite = document.querySelector("iframe").contentWindow.document.querySelector("body").innerHTML
        if (!userPrivatewritedate) {
            let time = new Date
            userPrivatewritedate = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
        }
        console.log(userPrivatewritebt, userPrivatewritedate, userPrivatewrite)
        if (!userPrivatewritebt || !userPrivatewrite) {
            alert("标题或内容不能为空")
        } else {
            axios.post("http://127.0.0.1:7001/Addprivatewrite", {
                usernum: 123456,
                userPrivatewritebt: userPrivatewritebt,
                userPrivatewritedate: userPrivatewritedate,
                userPrivatewrite: userPrivatewrite
            }).then((res) => {
                console.log(res.data)
                if (res.data == 1) {
                    alert("保存成功")
                    this.qingkong()
                    this.props.app.myright(true)
                }
            })
        }
    }
    qingkong(){
        console.log("1")
        document.querySelector("iframe").contentWindow.document.querySelector("body").innerHTML = ""
        this.setState({
            Privatewriterightbt:""
        })
    }
    centerxuanran(e){
        axios.get("http://127.0.0.1:7001/idgetuserwrite",{
            params:{
                id:e
            }
        }).then((res)=>{
            console.log(res.data)
            this.setState({
                Privatewriterightbt:res.data[0].bt
            })
            console.log(res.data[0].userwrite)
            document.querySelector("iframe").contentWindow.document.querySelector("body").innerHTML = res.data[0].userwrite
        })
    }
    componentDidMount() {
        let myhtml = document.querySelector("iframe").contentWindow.document.querySelector("body")
        myhtml.contentEditable = "true"
        myhtml.style.fontSize = "12px"
        myhtml.style.margin = 0
        myhtml.style.padding = "8px 8px"
        myhtml.style.color = "rgba(102,102,102,1)"
    }
    componentWillReceiveProps(props){
        console.log(props.qingkong,props)
        if(props.qingkong == true){
            this.qingkong()
        }
        if(props.centerxinxi){
            this.centerxuanran(props.centerxinxi)
        }
    }
}