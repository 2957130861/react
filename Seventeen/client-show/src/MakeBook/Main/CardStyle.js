import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class CardStyle extends Component {
    changeBook() {
        sessionStorage.setItem("bookimg","")
        sessionStorage.setItem("booktext","")
        sessionStorage.setItem("show","")
        sessionStorage.setItem("booksid",this.props.bookid)
    }
    render() {
        return (
            <div>
                <Link to={{pathname:"/books"}} onClick={this.changeBook.bind(this)}>
                    <img
                        src={this.props.imgurl}
                    />
                    <div className="info">
                        <span>样式1</span>
                        <span style={{color:"red"}}>￥59起</span>
                    </div>
                </Link>
            </div>

        )
    }
}
