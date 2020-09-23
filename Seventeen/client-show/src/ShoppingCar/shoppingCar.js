import React, { Component } from 'react';
import '../css/shoppingCar.css'
import { Layout,Empty,Popconfirm  } from 'antd';
import axios from 'axios'
import HeadNav from '../seventeen/headNav'
import LeftNotice from '../Notice/leftNotice'
import {Link} from 'react-router-dom'
import "whatwg-fetch"
const {Header,Sider,Content} = Layout;
export default class ShoppingCar extends Component {
    constructor(){
        super()
        this.state={
            arr:[],
            sum_price:0,
            isEmpty:'none',
            isaddgoods:'none'
        }
    }
    //获取数据
    componentWillMount(){
      this.showallGoods()
    }
    showallGoods() {
        axios.get("http://127.0.0.1:7001/getMybookShop",{})
        .then(res=>{
            console.log(res.data.length)
            if(res.data.length>0) {
            this.setState({
              arr:res.data,
              isEmpty:'block'
          })
        }else {
            this.setState({
                isEmpty:'none',
                isaddgoods:'block'
            })
        }
        })
    }
    //获取输入框的值
    getInputText=(e,i)=>{
        this.setState({
            arr:this.state.arr.map((ele,index)=>{
                if(index===i){
                    ele.num=e.target.value
                    return ele
                }else {
                    return ele
                }
            })
        })
        this.SumPrice()
    }
    //加
    augment=(e,i)=>{
        this.setState({
            arr:this.state.arr.map((ele,index)=>{
                if(index===i){
                    ele.num=ele.num*1+1
                    return ele
                }else {
                    return ele
                }
            })
        })
        this.SumPrice()
     }
    //减
    reduce=(e,i)=> {
        this.setState({
            arr:this.state.arr.map((ele,index)=>{
                if(index==i){
                    ele.num=ele.num*1-1
                    if(ele.num<1){
                      ele.num = 1
                    }
                    return ele
                }else {
                    return ele
                }
            })
        })
        this.SumPrice()
    }
    //删除
    del(e){
        console.log(e)
        axios.get("http://127.0.0.1:7001/deleteShopcar",{
            params:{
                id:e
            }
        }).then(r=>{
           return this.showallGoods()
        })
        setTimeout(()=>{
            this.SumPrice()
        },1)
    }
    // 实现全选与反选的操作
    CheckAllorNoAll=(e,i)=>{
        this.setState({
            arr:this.state.arr.map((ele,index)=>{
                if(index===i){
                    ele.checked=!ele.checked
                }
                return ele
            })
        })
        var flag=this.state.arr.every((ele,index)=>{
            if(ele.checked===false){
                return false
            }else {
                return true
            }
        })
        if(flag===true){
            this.refs.checkALL.checked=true
        }else {
            this.refs.checkALL.checked=false
        }
        this.SumPrice()
    }
    //全选全不选,判断全选状态
    CheckedAll=(e)=>{
        if(e.target.checked==true){
            this.setState({
                arr:this.state.arr.map((ele,index)=>{
                    ele.checked=true
                    return ele
                })
            })
        }else  if(e.target.checked==false){
            this.setState({
                arr:this.state.arr.map((ele,index)=>{
                    ele.checked=false
                    return ele
                })
            })
        }
        this.SumPrice()

    }
    //计算总合计
    SumPrice=()=>{
        var sum=0
        this.state.arr.forEach((ele,index)=>{
            if(ele.checked===true){
             sum+=ele.num*ele.price
            }
        })
        this.setState({
            sum_price:sum
        })
    }
    //结算传值
    SettleAccounts=()=>{
        var shopping=[]
        this.state.arr.forEach((ele,index)=>{
            if(ele.checked===true){
                shopping.push(ele)
            }
        })
        console.log(this.state.sum_price)
        if(this.state.sum_price==0) {
            alert('你还没有选择商品')
        }else{
        window.location.href="https://auth.alipay.com/login/index.htm"
        }
    }
    render() {
        return (
            <>
            <Layout>
            <Header style={{padding:0}}><HeadNav/></Header>
            </Layout>
            <Layout>
                <Sider style={{minHeight:'689px'}}><LeftNotice></LeftNotice></Sider>
                <Content>
                    <div className="G_car" style={{display:this.state.isEmpty}}>
                        <div className="G_header">
                    <h1>购物车</h1>
                </div>
                        <div className='section'>
                    {
                      this.state.arr.map((ele,index)=>{
                          return(
                          <div className="G_list" key={index}>
                            {/* 是否选中 */}
                              <div className="G_Checked">
                                        <input type="checkbox" checked={ele.checked} onChange={
                                            (e)=>{
                                                this.CheckAllorNoAll(e,index)
                                            }
                                        }/>
                              </div>
                            {/* 商品图片 */}
                              <div className="G_img">
                                        <img src={ele.img} alt=""/>
                                    </div> 
                            {/* 商品名字 */}
                              <div className="G_text">
                                            <p>{ele.name}</p>          
                                </div>
                            {/* 商品价格 */}
                              <div className="G_price">
                            <p>
                                单价：<span>{ele.price}</span>
                                小计：<span>{ele.num*ele.price}</span>
                             </p>
                            </div>
                            {/* 商品数量 */}
                              <div className="G_selected">
                                    <button onClick={
                                        (e)=>{
                                            this.augment(e,index)
                                        }
                                    }>+</button>
                                    <input type="text" ref="nums" style={{width:'15%'}} value={ele.num} onChange={
                                        (e)=>{
                                          this.getInputText(e,index)
                                        }
                                    }/>
                                    
                                    <button onClick={
                                        (e)=>{
                                            this.reduce(e,index)
                                        }
                                    }>-</button>
                                </div>
                            {/* 商品操作 */}
                              <div className="G_del">
                                  <button onClick={this.del.bind(this,ele.id)}>删除</button>
                                </div>
                          </div>
                            )
                        })
                    }
                </div>
                        <div className="G_footer">
                    <div className="G_Checkbox">
                        <input type="checkbox" ref="checkALL" onChange={
                            (e)=>{
                                this.CheckedAll(e)
                            }
                        }/>全选
                    </div>
                    <div className="payfor">
                    <div className="G_Price">
                        合计：{this.state.sum_price}
                    </div>
                    <div className="G_Button">
                        <button onClick={this.SettleAccounts.bind(this)}>结算</button>
                    </div>
                    </div>
                </div>
                    </div> 
                    <Empty style={{marginTop:'20px',display:this.state.isaddgoods}} 
                       description={<span style={{cursor:"pointer"}}>
                           <Link style={{color:'#333'}} to={{pathname:'/works'}}>您还没有订单，回到【我的作品】去下单吧~，点击跳转</Link>
                           </span>}>
                       </Empty>
            </Content>
            </Layout>
            </>
        );
    }
}