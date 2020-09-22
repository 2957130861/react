import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class NAv extends Component {
   
    render() {
        return (
            <div style={{ height: "60px", width: "100vw" }}>
                <Link to="/">做书/打印</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/seeall">我的作品</Link>
            </div>
        )
    }
}
