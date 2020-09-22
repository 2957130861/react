import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';
import Li from "./Li"
import axios from 'axios';

export default class Middle extends Component {
  constructor(){
    super();
    this.state={
      LiList:[],
    }
  }
  showMyBook(){
    return this.state.LiList.map(item=>{
      return <Li img={item.img} title={item.title} text={item.text} bookid={item.bookid} time={item.time} key={item.id}/>
    })
  }
  getMyBook(){
    axios.post("http://localhost:7001/getMyBook",{
      userid:1
    })
    .then(r=>{
      this.setState({LiList:r.data})
    })
  }
  componentWillMount(){
    this.getMyBook();
  }
  render() {
    return (
      <Scrollbars>
        <div className="middle">
          <ul>
            {this.showMyBook()}
          </ul>
        </div>
      </Scrollbars >
    )
  }
}
