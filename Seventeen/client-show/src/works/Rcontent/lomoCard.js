import React from 'react'
import '../../css/rightContent.css'
import {Button} from 'antd';
export default class TogetherBook extends React.Component {
    constructor() {
        super();
        this.state ={
            isshow:'none',    
        }
       
    }
    touchStart() {
        this.setState({
            isshow:'inline'
        })
    }
    // 点击取消显示
    stopStart() {
        this.setState({
            isshow:'none'
        })
    }
    
    render(){
        return (
            <>
             <div className="headContend">
                <p style={{fontSize:12}}>lomo卡</p>
                <div className="Btn">
                <Button size={"middle"} style={{background:'',display:this.state.isshow}} onClick={this.stopStart.bind(this)}>取消</Button>
                <Button size={"middle"} style={{background:'',display:this.state.isshow}}>确定</Button>
                <Button size={"middle"} style={{background:'#403c3c',color:"gold"}} onClick={this.touchStart.bind(this)}>下单</Button>
                <Button size={"middle"} style={{background:''}} onClick={this.touchStart.bind(this)}>删除</Button>
                </div>
            </div>
            <div className="noContent">
                {/* <img/> */}
                <em>你还没有作品,快来和你朋友一起创建共同的书吧!</em>
            </div>
            </>
        )
    }
} 