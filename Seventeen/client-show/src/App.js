import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createHashHistory } from "history";

import MakeBook from "./MakeBook/MakeBook.js";
import Book from "./MakeBook/Book.js";
import SeeAll from "./MakeBook/SeeAll.js";

import 'antd/dist/antd.css';
import "./App.css"
import mystore from './Store.js'
import { Provider } from 'react-redux'


//要放在import之后
const myHistory = createHashHistory();
export default class App extends Component {
  render() {
    return (
      <>
        <Provider store={mystore}>
          <Router history={myHistory}>
            <Route exact={true} path="/" component={MakeBook} />
            <Route exact={true} path="/makebook" component={MakeBook} />
            <Route exact={true} path="/seeall" component={SeeAll} />
            <Route exact={true} path="/books" component={Book} />
          </Router>
        </Provider>
      </>
    )
  }
}
