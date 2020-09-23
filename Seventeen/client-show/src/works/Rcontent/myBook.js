import React from 'react'
import '../../css/rightContent.css'
import axios from 'axios'
import {Button} from 'antd';
import { withRouter } from 'react-router-dom'
class  MyBook extends React.Component {
    constructor() {
        super();
        this.state = {
            mybooks:[],
            isshow:'none',
            isdel:'none',
            isadd:'none',
            opacity:0,   
        }
    }
    // 挂载显示
    componentDidMount() {
        this.getMybook(); 
    }
    //获取数据库书籍
    getMybook() {
        axios.get("http://127.0.0.1:7001/getMybook",{
            params:{
                userid:1
            }
        })
        .then(r=>{
            console.log(r.data)
            this.setState({mybooks : [...r.data]})
        })
    }
    // 点击显示确定按钮
    delshow() {
        this.setState({
            isdel:'inline-block',
            isshow:'inline-block'
        })
    }
    addshop() {
        this.setState({
            isshow:'inline-block',
            isadd:'inline-block'
        })
    }
    // 点击取消显示
    stopStart() {
        this.setState({
            isshow:'none',
            isdel:'none',
            isadd:'none'
        })
    }
    // 删除商品
    delMybooks(e) {
        console.log(e)
        alert('删除成功')
        axios.post("http://127.0.0.1:7001/delgoods",{
            id:e
        }).then(r=>{
            return this.getMybook()
        })
    }
    // 添加到购物车
    addshopping(e) {
        axios.post("http://127.0.0.1:7001/addShopcar",{
            name:e.title,
            img:e.img,
            about:e.text,
            price:e.price
        }).then(r=>{
           alert('添加购物车成功')
           this.props.history.push({pathname:'/shoppingCar'})
        }) 
    }
    render(){
        return (
            <>
            <div className="rightcontent1">
            <div className="headContend">
                <p style={{fontSize:12}}>自己的书</p>
                <div className="Btn">
                <Button size={"middle"} style={{background:'',display:this.state.isshow}} onClick={this.stopStart.bind(this)}>取消</Button>
                <Button size={"middle"} style={{background:'#403c3c',color:"gold"}} onClick={this.addshop.bind(this)}>下单</Button>
                <Button size={"middle"} style={{background:''}} onClick={this.delshow.bind(this)}>删除</Button>
                </div>
            </div>
            <div className="mybooks" >
               {
                   this.state.mybooks.map((item,index)=>{
                       return (  
                        <>
                            <div className="books" key={index}>
                                <img src={item.img} />
                                <span className="delspan"
                                 style={{display:this.state.isdel}} 
                                 onClick={this.delMybooks.bind(this,item.id)} 
                                >X</span>
                                <p style={{width:125}}>{item.title}&nbsp;&nbsp;&nbsp;{item.price}元</p>
                                <p>{item.text}</p>
                                <button style={{marginLeft:60,display:this.state.isadd}} 
                                   onClick = {this.addshopping.bind(this,item)}>加入购物车
                                </button>
                            </div>
                        </>
                       )
                   })
               }
            </div>
            </div>
            </>
        )
    }
} 

export default withRouter(MyBook);