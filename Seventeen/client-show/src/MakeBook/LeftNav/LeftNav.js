import React, { Component } from 'react'
import "./LeftNav.css"
import Top from "./Top"
import Middle from "./Middle"
import Bottom from "./Bottom"
export default class LeftNav extends Component {
  render() {
    return (
      <>
        <div className="leftnav">
          <Top/>
          <Middle/>
          <Bottom/>
        </div>
      </>
    )
  }
}
