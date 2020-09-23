import React from "react"
import { Table,Input,Button,Popconfirm } from 'antd';
import "./table.css"
import axios from "axios"

export default class TableList extends React.Component{
  constructor(){
    super()
    this.state={
      title:"",
      userid:"",
      text:"",
      bookid:"",
      tabledata:[],
      type1:[
        {
          title: 'id',
          width: 100,
          dataIndex: 'id',
          key: 'id',
          fixed: 'left',
        },
        {
          title: '用户id',
          width: 100,
          dataIndex: 'userid',
          key: 'userid',
          fixed: 'left',
        },
        {
          title: '书本id',
          dataIndex: 'bookid',
          key: 'userid',
          width: 150,
        },
        {
          title: '图片地址',
          dataIndex: 'img',
          key: 'img',
          width: 150,
        },
        {
          title: '文本',
          dataIndex: 'text',
          key: 'text',
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
      ]
    }
}
handleDelete = (key) => {
  console.log(key);
  const tabledata = [...this.state.tabledata];
  this.setState({
    tabledata: tabledata.filter((item) => item.key !== key),
  });
  axios.get("http://localhost:7001/deleteBook",{
    params:{
      id:key
    }
  }).then(r=>{
    
  }).catch(e=>{

  })
};
onChange = e => {
  this.setState({
    title:e.target.value
  })
  console.log(this.state.penbook);
};
onChange1 = e => {
  this.setState({
    userid:e.target.value
  })
  console.log(this.state.phone);

};
onChange2 = e => {
  this.setState({
    text:e.target.value
  })
  console.log(this.state.email);
};
onChange3 = e => {
  this.setState({
    bookid:e.target.value
  })
  console.log(this.state.pwd);
};
componentWillMount(){
  this.getdata()
}
getdata(){
  axios.get("http://localhost:7001/showBook",{

  }).then(r=>{
    let newdata=r.data;
    for (let index = 0; index < newdata.length; index++) {
    newdata[index].key=newdata[index].id
    }
    this.setState({
      tabledata:newdata,
    })
  }).catch(e=>{

  })
}
  adduser(){
    axios.post("http://localhost:7001/addBook",{
      title:this.state.title,
      userid:this.state.userid,
      text:this.state.text,
      bookid:this.state.bookid,
    }).then(r=>{
      this.getdata()
    }).catch()
  }

render(){
    return(
      <>
        <Table columns={this.state.type1} dataSource={this.state.tabledata} scroll={{ x: 1500, y: 300 }} bordered={true}/>
       <div className="addtable">
         <div className="inputcont">
         <label for="title" className="labelcont">标题:</label>
         <Input id="title" placeholder="请输入你的标题" allowClear onChange={this.onChange.bind(this)} />
         </div>
         <div className="inputcont">
         <label  for="userid" className="labelcont">用户id:</label>
         <Input id="userid" placeholder="请输入你的电话号码" allowClear onChange={this.onChange1.bind(this)} />
         </div>
         <div className="inputcont">
         <label  for="text" className="labelcont">文本信息:</label>
         <Input id="text" placeholder="请输入你的邮件地址" allowClear onChange={this.onChange2.bind(this)} />
         </div>
         <div className="inputcont">
         <label  for="bookid" className="labelcont">书籍id:</label>
         <Input id="bookid" placeholder="请输入你的密码" allowClear onChange={this.onChange3.bind(this)} />
         </div>
         <Button type="primary" onClick={this.adduser.bind(this)}>添加</Button>
       </div>
      </>
    )
}
}