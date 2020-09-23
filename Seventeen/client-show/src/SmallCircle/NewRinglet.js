import React from "react";
import {input ,Button} from 'antd';
import "./css/NewRinglet.css";
import axios from "axios";


export default class App extends React.Component{
    constructor(){
        super();
      this.state={
          checked:"notchecked",
          id:"",
          disclass:'ant-tag-checkable',
          teamname:"最好的我们"
      }
      
    }
    close(){
        this.setState({
            checked:"notchecked"
        })
    }
    add(){
       axios.post("http://localhost:7001/addTeam",{title:this.state.teamname}).then(r=>{
           window.location.reload()
       })
            this.setState({
                checked:"notchecked",
    }
      )}
    onChange(e){
        this.setState({
            teamname:e.target.value
        })
    }
    class1(){
              this.setState({
                disclass:'ant-tag-checkable',
                bbs1:'rgb(61,61,61)',
                cr1:'#debc8b'
               // key:"this.id"?
        }   
        )
    }
    class2(){
        this.setState({
                disclass:'ant-tag-checkable',
                bbs2:'rgb(61,61,61)',
                cr2:'#debc8b'
                // key:"this.id"?
        }   
        )

    }
    class3(){
        this.setState({
                disclass:'ant-tag-checkable',
                bbs3:'rgb(61,61,61)',
                cr3:'#debc8b'
                // key:"this.id"?
        }   
        )

    }
    class4(){
        this.setState({
                disclass:'ant-tag-checkable',
                bbs4:'rgb(61,61,61)',
                cr4:'#debc8b'
                // key:"this.id"?
        }   
        )

    }
    class5(){
        this.setState({
                disclass:'ant-tag-checkable',
                bbs5:'rgb(61,61,61)',
                cr5:'#debc8b'
                // key:"this.id"?
        }   
        )

    }
    class6(){
        this.setState({
                disclass:'ant-tag-checkable',
                bbs6:'rgb(61,61,61)',
                cr6:'#debc8b'
                // key:"this.id"?
        }   
        )

    }
    class7(){
        this.setState({
                disclass:'ant-tag-checkable',
                bbs7:'rgb(61,61,61)',
                cr7:'#debc8b'
                // key:"this.id"?
        }   
        )

    }
    class8(){
        this.setState({
                disclass:'ant-tag-checkable',
                bbs8:'rgb(61,61,61)',
                // key:"this.id"?
                cr8:'#debc8b'
        }   
        )

    }

    render(){
        const {checked}=this.state;
        this.state.checked=this.props.checked;
       return(
           <>
            <div className={checked}>
            <div className="module" onClick={this.close.bind(this)}></div>
            <div className="content"  >
                <div className="content-top">
                    <div className="title">请输入小圈的名称</div>
                    <input  className="content-title" onChange={this.onChange.bind(this)} value={this.state.teamname} style={{"width":"300px"},{"textalign":"center"}}/>
                </div>
                <div className="content-mid">
                    <div className="team">请选择小圈分组</div>
                    <div className="">删除</div>
                </div>
                <div style={{width:"100%", height:"100px", overflow:"hidden auto", display: "flex", flexWrap:"wrap"}} >
                    <div id="1" className="it"><span onClick={this.class1.bind(this)} style={{background:this.state.bbs1,color:this.state.cr1}} className="ant-tag  ant-tag-checkable ant-tag-checkable-checked"  key="1">恋人</span></div>
                    <div id="2" className="it"><span onClick={this.class2.bind(this)} style={{background:this.state.bbs2,color:this.state.cr2}}  className="ant-tag ant-tag-checkable ant-tag-checkable-checked" key="2">闺蜜</span></div>
                    <div id="3" className="it"><span onClick={this.class3.bind(this)} style={{background:this.state.bbs3,color:this.state.cr3}} className="ant-tag ant-tag-checkable ant-tag-checkable-checked" key="3">家人</span></div>
                    <div id="4" className="it"><span onClick={this.class4.bind(this)} style={{background:this.state.bbs4,color:this.state.cr4}} className="ant-tag ant-tag-checkable ant-tag-checkable-checked" key="4">同学</span></div>
                    <div id="5" className="it"><span onClick={this.class5.bind(this)} style={{background:this.state.bbs5,color:this.state.cr5}} className="ant-tag ant-tag-checkable ant-tag-checkable-checked" key="5">旅行</span></div>
                    <div id="6" className="it"><span onClick={this.class6.bind(this)} style={{background:this.state.bbs6,color:this.state.cr6}} className="ant-tag ant-tag-checkable ant-tag-checkable-checked" key="6">读书打卡圈</span></div>
                    <div id="7" className="it"><span onClick={this.class7.bind(this)} style={{background:this.state.bbs7,color:this.state.cr7}} className="ant-tag ant-tag-checkable ant-tag-checkable-checked" key="7">运动打卡圈</span></div>
                    <div id="8" className="it"><span onClick={this.class8.bind(this)} style={{background:this.state.bbs8,color:this.state.cr8}} className="ant-tag ant-tag-checkable ant-tag-checkable-checked" key="8">恋人</span></div>

                </div>
                <div className="content-bottom">
                    <Button onClick={this.add.bind(this)} type="primary" style={{"width":"300px","border":"1px solid #debc8b","background":"#403c3c","color": "#debc8b"}}>确定</Button>
                </div>
            </div>
            </div>
        </>
       )
    }
}