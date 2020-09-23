import React, { Component } from 'react'
import "./Main.css"
import { Scrollbars } from 'react-custom-scrollbars';
import ProductBanner from "./ProductBanner";
import CardStyle from "./CardStyle";
import firstimg from "../../img/订书.png"
import secondimg from "../../img/订书2.png"
import thirdimg from "../../img/订书3.png"
import forth from "../../img/订书4.png"
export default class Main extends Component {
  constructor(){
    super();
    this.state={
      img:[
        firstimg,
        secondimg,
        thirdimg,
        forth,
      ]
    }
  }
  render() {
    return (
      <>
        <div className="main">
          <Scrollbars>
            <div className="title">
              <p>热门印品</p>
            </div>
            <ProductBanner />
            <div className="cardStyles">
              <CardStyle bookid={1} imgurl={this.state.img[0]}/>
              <CardStyle bookid={2} imgurl={this.state.img[1]}/>
              <CardStyle bookid={3} imgurl={this.state.img[2]}/>
              <CardStyle bookid={4} imgurl={this.state.img[3]}/>
            </div>
          </Scrollbars>
        </div>
      </>
    )
  }
}
