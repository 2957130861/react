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
                        src={"https://res.shiqichuban.com/v1/image/get/oTlp2YkpNWIXmp-TI7Nt4GKfzeHl9cib0VkCUd0as-cYq1_5J9UIN80uNLUJ448AKm-GHU2BBpu1TYgmCWTNGQ"}
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
