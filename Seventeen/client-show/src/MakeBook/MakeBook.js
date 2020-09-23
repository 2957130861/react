import React, { Component } from 'react'
import LeftNav from "./LeftNav/LeftNav";
import Main from "./Main/Main";
import "./makebook.css";
import Nav from "./Nav";
export default class MakeBook extends Component {
  render() {
    return (
      <>
        <Nav/>
        <div className="makebook">
          <LeftNav />
          <Main />
        </div>
      </>
    )
  }
}
