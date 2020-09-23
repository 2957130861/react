import React from "react";
import axios from "axios";
import {
  CaretDownOutlined, CaretRightOutlined, FormOutlined, SnippetsOutlined, TeamOutlined,
  CustomerServiceOutlined, PictureOutlined, VideoCameraOutlined, SettingOutlined, FileSearchOutlined,
  CalendarOutlined
} from "@ant-design/icons";
import { Button, Input, DatePicker, Space, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import "./css/RingletMain.css";
import NewRinglet from "./NewRinglet"
import SetRinglet from "./SetRinglet"
// import SetRingletName from "../components/SetRingletName"
const dateFormat = 'YYYY/MM/DD';
const { TextArea } = Input;
const text1 = <span>音乐</span>;
const text2 = <span>照片</span>;
const text3 = <span>视频</span>;
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Rcontent:[],
      checked: "notchecked",
      checked1: "notchecked",
      checked2: "notchecked",
      title:"",
      ImgUrl:'',
      id:''
    }

  }

componentDidMount() {
    this.getTeam(); 
}
async getTeam(){
    let r= await axios.post("http://127.0.0.1:7001/getTeam")
      this.setState({
        Rcontent:r.data
      })
    }
 
  ischecked(){
    this.setState({
      checked:"checked"
    })
  }
  ischecked1() {
    this.setState({
      checked1: "checked"
    })
  }
  ischecked2(key) {
    this.setState({
      checked2: "checked2",
      title:this.state.Rcontent[key].title,
      id:this.state.Rcontent[key].id,
      pagetotal:this.state.Rcontent[key].pagetotal
    })  
    console.log(this.state.pagetotal)
  
   
  } 
  render() {
    return (
      <>
        <div className="box">
          <div className="RingLet">
            <div className="leftcontent">
              <div className="lefttop">
                <Button type="dashed" className="createbtn" block onClick={this.ischecked.bind(this)}>
                  + 创建小圈
                        </Button>
              </div>
              
              <b className="createR">创建的圈子<CaretDownOutlined /></b>
              <div className="KM" style={{overflowY: "auto"}}>
              {this.state.Rcontent.map((item, index) => {
                return (
                <span className="Rcont" key={index}>
                    <span>
                      <img src={item.img} className="Rimg"></img>
                    </span>
                    <span className="Rcont-right">
                      <span className="Rcont-icon">
                        <span className="Rcont-cate1">{item.title}</span>
                        <span onClick={this.ischecked2.bind(this,index)}><FormOutlined /></span>
                      </span>
                      <span className="Rcont-icon">
                        <span className="Rcont-cate"><SnippetsOutlined />&nbsp;&nbsp;文章：{item.pagetotal}</span>
                        <span className="Rcont-cate"><CaretRightOutlined /></span>
                      </span>
                      <span className="Rcont-icon">
                        <span className="Rcont-cate"><TeamOutlined />&nbsp;&nbsp;成员：{item.member}</span>
                      </span>
                    </span>
                  </span>
                )
              })}
              </div>
          
            </div>
            <NewRinglet checked={this.state.checked}></NewRinglet>
            <SetRinglet id={this.state.id} pagetotal={this.state.pagetotal} checked2={this.state.checked2} title={this.state.title}></SetRinglet>
            <div className="middlecontent">
              <div>
                <div className="midTarea">
                  <TextArea rows={8} placeholder="请输入内容" />
                </div>
                <div className="midIconOne">
                  <div>
                    <Tooltip placement="top" title={text1} ><span className="midIcon"><CustomerServiceOutlined /></span> </Tooltip>
                    <Tooltip placement="top" title={text2} ><span className="midIcon"><PictureOutlined /></span> </Tooltip>
                    <Tooltip placement="top" title={text3} ><span className="midIcon"><VideoCameraOutlined /></span> </Tooltip>
                    <div>
                      <img src={this.state.ImgUrl}/>
                    </div>
                  </div>
                  <div>
                    <span className="midbtn">
                      <Space direction="vertical" size={12}>
                        <DatePicker locale={locale} showNow={true} defaultValue={moment('2020/9/15', dateFormat)} format={dateFormat} />
                      </Space></span>
                    <span className="midbtn"> <Button type="primary" style={{ "background": "#fff", "color": "#595959", border: "1px solid #debc8b" }} className="mid-change">转换长文编辑器</Button></span>
                    <span className="midbtn"> <Button type="primary" style={{ "background": "#333", "color": "#debc8b", border: "1px solid #333" }}>保存</Button></span>
                  </div>
                </div>
                <div className="mid-caps"></div>
                <div className="mid-bottom-cont">
                  <div className="mid-nav">
                    <div className="mid-po">
                      <div><b className="midNav-cont">总共文章(7)</b><span className="midNav-cont midNav-cont1">刷新</span></div>
                      <div className="midNav-cont midNav-cont1">筛选</div>
                    </div>
                  </div>   
                    <div style={{"width": "100%", height: "278px", background:"rgb(255, 255, 255)", borderBottom:"1px solid rgb(233, 233, 233)", margin: "0px auto", boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{width:"264px"}} className="BaImg"></div>
                    </div>
                </div>   
              </div> 
            </div>
            <div className="rightcontent">
              <div className="rightTop">空间相关功能</div>
              <div style={{width: "158px", height: "108px", backgroundSize: "100%", display:"block", fontFamily: "PingFangSC-Regular","color": "rgb(75, 75, 75)", fontSize: "12px", cursor:"pointer"}} className="Imgurl">
              <p style={{"color":"rgb(153, 153, 153)",borderBottom:" 1px solid rgb(222, 188, 139)",width: "100px", paddingBottom: "6px", margin:"38px auto 6px ","textAlign": "center","letterSpacing":"1px ","cursor":"pointer"}}>设置纪念日</p>
              <p style={{"textAlign":"center"}}>第<span style={{padding:"0px 30px" ,color: "rgb(222, 188, 139)","fontSize": "16px", "fontWeight": "600"}}>2</span>天</p></div>
              <div className="righticoncontent">
                <div className="iconpad">
                  <div className="righticonbox firsticonbox"><CalendarOutlined /></div>
                  <p className="rightbeen">导出成书</p>
                </div>
                <div className="iconpad">
                  <div className="righticonbox"><FileSearchOutlined /></div>
                  <p className="rightlinkto">查看和朋友的书</p>
                </div>
                <div className="iconpad" onClick={this.ischecked.bind(this)}>
                  <div className="righticonbox"> <SettingOutlined /></div>
                  <p className="rightlinkto" >小圈管理</p>
                </div>
                <div className="iconpad" onClick={this.ischecked.bind(this)}>
                  <div className="righticonbox"> <SettingOutlined /></div>
                  <p className="rightlinkto" >邀请好友</p>
                </div>

              </div>
              <div className="rightBottom">
                <p>小圈成员</p>
              </div>
              <div>
                <Avatar src="" />
                <p>姓名</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}