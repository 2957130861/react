import React from "react"
import { Table,Input,Button,Popconfirm } from 'antd';
import "./table.css"
import axios from "axios"
export default class TableList extends React.Component{
  constructor(){
    super()
    this.state={
       type1 : [
          {
            title: 'id',
            width: 100,
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
          },
          {
            title: '笔名',
            width: 100,
            dataIndex: 'penbook',
            key: 'penbook',
            fixed: 'left',
          },
          {
            title: '电话号码',
            dataIndex: 'phone',
            key: 'phone',
            width: 150,
          },
          {
            title: '邮件地址',
            dataIndex: 'email',
            key: 'email',
            width: 150,
          },
          {
            title: '管理员',
            dataIndex: 'isroot',
            key: 'isroot',
            width: 150,
          },
          {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (text, record) =>
          this.state.tabledata.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
          },
        ],
        penbook:"",
        email:"",
        phone:"",
        pwd:"",
        tabledata:[],
      }
  }
  handleDelete = (key) => {
    console.log(key);
    const tabledata = [...this.state.tabledata];
    this.setState({
      tabledata: tabledata.filter((item) => item.key !== key),
    });
    axios.get("http://localhost:7001/deleteUser",{
      params:{
        id:key
      }
    }).then(r=>{

    }).catch(e=>{

    })
  };
  onChange = e => {
    this.setState({
      penbook:e.target.value
    })
    console.log(this.state.penbook);
  };
  onChange1 = e => {
    this.setState({
      phone:e.target.value
    })
    console.log(this.state.phone);

  };
  onChange2 = e => {
    this.setState({
      email:e.target.value
    })
    console.log(this.state.email);
  };
  onChange3 = e => {
    this.setState({
      pwd:e.target.value
    })
    console.log(this.state.pwd);
  };
  componentWillMount(){
    this.getdata()
  }
  getdata(){
    axios.get("http://localhost:7001/showLocalUser",{

    }).then(r=>{
      console.log(r.data);
      this.setState({
        tabledata:r.data,
      })
    }).catch(e=>{

    })
  }
    componentWillMount(){
      this.getdata()
    }
    getdata(){
      axios.get("http://localhost:7001/showRootUser",{

      }).then(r=>{
        let newdata=r.data;
        for (let index = 0; index < newdata.length; index++) {
        newdata[index].key=newdata[index].id
        }
        console.log(newdata);
        this.setState({
          tabledata:newdata,
        })
      }).catch(e=>{

      })
    }
    adduser(){
      axios.post("http://localhost:7001/addUser",{
        penbook:this.state.penbook,
        phone:this.state.phone,
        email:this.state.email,
        password:this.state.pwd,
        isroot:1,
      }).then(r=>{
        this.getdata()
      }).catch()
    }
    render(){
        return(
          <>
            <Table columns={this.state.type1} dataSource={this.state.tabledata} scroll={{ x: 1500, y: 300 }} />
            <div className="addtable">
             <div className="inputcont">
             <label for="penbook" className="labelcont">笔名:</label>
             <Input id="penbook" placeholder="请输入你的笔名" allowClear onChange={this.onChange.bind(this)} />
             </div>
             <div className="inputcont">
             <label  for="phone" className="labelcont">电话号码:</label>
             <Input id="phone" placeholder="请输入你的电话号码" allowClear onChange={this.onChange1.bind(this)} />
             </div>
             <div className="inputcont">
             <label  for="email" className="labelcont">邮件地址:</label>
             <Input id="email" placeholder="请输入你的邮件地址" allowClear onChange={this.onChange2.bind(this)} />
             </div>
             <div className="inputcont">
             <label  for="pwd" className="labelcont">密码:</label>
             <Input id="pwd" placeholder="请输入你的密码" allowClear onChange={this.onChange3.bind(this)} />
             </div>
             <Button type="primary" onClick={this.adduser.bind(this)}>添加</Button>
           </div>
          </>
        )
    }
}