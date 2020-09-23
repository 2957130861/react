import React from "react"
import { Table,Input,Button ,Popconfirm} from 'antd';
import "./table.css"
import axios from "axios"


export default class TableList extends React.Component{
  constructor(){
    super()
    this.state={
      usernum:"",
      bt:"",
      time:"",
      userwrite:"",
      tabledata:[],
      type1: [
        {
          title: 'id',
          width: 100,
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: '账号',
          width: 100,
          dataIndex: 'usernum',
          key: 'usernum',
        },
        {
          title: '时间',
          dataIndex: 'time',
          key: 'time',
          width: 150,
        },
        {
          title: 'BT',
          dataIndex: 'bt',
          key: 'bt',
          width: 150,
        },
        {
          title: '用户输入',
          dataIndex: 'userwrite',
          key: 'userwrite',
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
  axios.get("http://localhost:7001/deleteUserprivatewrite",{
    params:{
      id:key
    }
  }).then(r=>{
    
  }).catch(e=>{

  })
};
onChange = e => {
  this.setState({
    usernum:e.target.value
  })
  console.log(this.state.penbook);
};
onChange1 = e => {
  this.setState({
    bt:e.target.value
  })
  console.log(this.state.phone);

};
onChange2 = e => {
  this.setState({
    time:e.target.value
  })
  console.log(this.state.email);
};
onChange3 = e => {
  this.setState({
    userwrite:e.target.value
  })
  console.log(this.state.pwd);
};
componentWillMount(){
  this.getdata()
}
getdata(){
  axios.get("http://localhost:7001/showUserprivatewrite",{

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
    axios.post("http://localhost:7001/addUserprivatewrite",{
      usernum:this.state.usernum,
      bt:this.state.bt,
      time:this.state.time,
      userwrite:this.state.userwrite,
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
         <label for="usernum" className="labelcont">用户名:</label>
         <Input id="usernum" placeholder="请输入你的用户名" allowClear onChange={this.onChange.bind(this)} />
         </div>
         <div className="inputcont">
         <label  for="bt" className="labelcont">BT:</label>
         <Input id="bt" placeholder="请输入你的BT" allowClear onChange={this.onChange1.bind(this)} />
         </div>
         <div className="inputcont">
         <label  for="time" className="labelcont">时间:</label>
         <Input id="time" placeholder="请输入你的时间" allowClear onChange={this.onChange2.bind(this)} />
         </div>
         <div className="inputcont">
         <label  for="userwrite" className="labelcont">输入信息:</label>
         <Input id="userwrite" placeholder="请输入信息" allowClear onChange={this.onChange3.bind(this)} />
         </div>
         <Button type="primary" onClick={this.adduser.bind(this)}>添加</Button>
       </div>
      </>
    )
}
}