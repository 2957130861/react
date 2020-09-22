import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class componentName extends Component {
    changeBook() {
        sessionStorage.setItem("bookimg",this.props.img)
        sessionStorage.setItem("booktext",this.props.text)
        sessionStorage.setItem("booksid",this.props.bookid)
        sessionStorage.setItem("show","")
    }
    render() {
        return (
            <>
                <li onClick={this.changeBook.bind(this)}>
                    <Link to={{pathname:"/books"}} >
                        <div className="card">
                            <img src={this.props.img} />
                            <div>
                                <p>{this.props.title}</p>
                                <p >{this.props.text}</p>
                                <p>{this.props.time.substring(0,10)}</p>
                            </div>
                        </div>
                    </Link>
                </li>
            </>
        )
    }
}
