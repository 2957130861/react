import React from "react";
import axios from "axios"
import { Input, Button } from 'antd';
import "./css/SetRinglet.css";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            checked2: "notchecked",
            teamname: "",
            pagetotals:""
        }
    }
   
    modify() {
        let delid = this.props.id
        let pagetotal =this.state.pagetotals
        let title =this.state.teamname
        axios.post("http://127.0.0.1:7001/modifyTeam",{
                id:delid,
                title:title,
                pagetotal:pagetotal,
           
        }).then(r=>{
            window.location.reload()
        })
        this.setState({
            checked2: "notchecked"
        })
        console.log(title)
    }
    delete() {
        let delid = this.props.id
        axios.get("http://127.0.0.1:7001/deleteTeam",{
            params:{
                id:delid
            }
           
        }).then(r=>{
            window.location.reload()
        })
        this.setState({
            checked2: "notchecked"
        })
        console.log(delid)
   
    }
    onChange(e) {
        this.setState({
            teamname: e.target.value
        })
        console.log(e.target.value)
    }    
    Pagetotals(e) {
        this.setState({
            pagetotals: e.target.value
        })
        console.log( this.props.pagetotal)
    }    
    render() {
        const { checked2} = this.state;
        this.state.checked2 = this.props.checked2;
        return (
            <>
                <div className={checked2}>
                    <div className="module1"></div>
                    <div className="content1">
                        <div className="content1-top">
                            <span>更改小圈名称</span>
                            <input type="inf"   onChange={this.onChange.bind(this)} placeholder={this.props.title} value={this.state.teamname} style={{ "width": "200px" }}></input>
                        </div>
                        <div className="content1-top">
                            <span>文章昵称</span>
                            <input type="inf" onChange={this.Pagetotals.bind(this)}  placeholder={this.props.pagetotal} value={this.state.pagetotals} style={{ "width": "200px" }}></input>
                        </div>

                        <div className="content1-bottom-left">
                            <Button  className="button" onClick={this.modify.bind(this)} type="primary" style={{ "width": "300px", "border": "1px solid #debc8b", "background": "#403c3c", "color": "#debc8b" }}>确定</Button>
                        </div>
                        <div className="content1-bottom-right">
                            <Button  id={this.props.id} className="button" onClick={this.delete.bind(this)} type="primary" style={{ "width": "300px", "border": "1px solid #debc8b", "background": "#403c3c", "color": "#debc8b" }}>删除</Button>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}