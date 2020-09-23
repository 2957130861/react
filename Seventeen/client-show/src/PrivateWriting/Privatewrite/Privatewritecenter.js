import React from 'react';
import "antd/dist/antd.css";
import { SearchOutlined } from "@ant-design/icons"
import axios from 'axios';

export default class Privatewritecenter extends React.Component {
    constructor() {
        super()
        this.state = {
            articlesnum: 0,
            Privatewritearr: [],
            value:""
        }
    }
    render() {
        return (
            <div className="Privatewritecenter">
                <div className="Privatewritecenter-nr">
                    <div className="Privatewritecenter-nr-top">
                        <div>
                            <input value={this.state.value} onChange={this.shuruNR.bind(this)} placeholder="请输入搜索内容" className="Privatewritecenter-search" type="text" />
                            <span onClick={this.SearchArticles.bind(this)} className="Privatewritecenter-search-sure"><SearchOutlined /></span>
                        </div>
                        <div className="Privatewritecenter-nr-top-h">全部文章（{this.state.articlesnum}）</div>
                    </div>
                    <div className="Privatewritecenter-nr-bottom">
                        <div className="Privatewritecenter-nr-bottom-nr">
                            {this.list()}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    SearchArticles(){
        if(this.state.value){
            axios.get("http://127.0.0.1:7001/ssgetuserwrite",{
                params:{
                    bt: this.state.value
                }
            }).then((res)=>{
                console.log(res.data)
                this.setState({
                    Privatewritearr:res.data
                })
            })
        }else{
            this.getPrivatewrite()
        }
    }
    shuruNR(event){
        this.setState({
            value:event.target.value
        })
    }
    huishou(myname){
        axios.get("http://127.0.0.1:7001/idgetuserwrite",{
            params:{
                id:myname
            }
        }).then((res)=>{
            console.log(res.data)
        })
    }
    mydelete(myname,e){
        console.log(myname,e)
        e.stopPropagation();
        this.huishou(myname)
        axios.post("http://127.0.0.1:7001/deleteuserwrite",{
            id:myname
        }).then((res)=>{
            console.log(res.data)
            if(res.data == 1){
                this.getPrivatewrite()
            }else{
                alert("删除失败")
            }
        })
    }
    chakan(itemid){
        console.log(itemid)
        this.props.app.mycenter(itemid)
    }
    list() {
        const listItems = this.state.Privatewritearr.map((item) => {
            return <div onClick={this.chakan.bind(this,item.id)} className="Privatewrite-XHNR" key={item.id}>
                <p>{item.bt}</p>
                <div>
                    <span className="Privatewrite-XHNR-time">{item.time}</span>
                    <span onClick={this.mydelete.bind(this,item.id)} className="Privatewrite-XHNR-delete">删除</span>
                </div>
            </div>
        }
        );
        return listItems
    }
    getPrivatewrite() {
        axios.get("http://127.0.0.1:7001/getuserwrite", {
            params: {
                usernum: 123456
            }
        }).then((res) => {
            console.log(res.data)
            this.setState({
                Privatewritearr: res.data,
                articlesnum: res.data.length
            })
        })
    }
    componentDidMount() {
        this.props.bcxuanran(this)
        this.getPrivatewrite()
    }
}