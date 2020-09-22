import React, { Component } from 'react'
import "./Main.css"
import { Scrollbars } from 'react-custom-scrollbars';
import ProductBanner from "./ProductBanner";
import CardStyle from "./CardStyle";

export default class Main extends Component {
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
              <CardStyle bookid={1} />
              <CardStyle bookid={2}/>
              <CardStyle bookid={3}/>
              <CardStyle bookid={4}/>
            </div>
          </Scrollbars>
        </div>
      </>
    )
  }
}
