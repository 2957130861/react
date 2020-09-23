import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ProductBanner extends Component {
    setshow(id){
        sessionStorage.setItem("show",id)
    }
    render() {
        return (
            <div className="productBanner">
                <div onClick={this.setshow.bind(this,1)}>
                    <Link to={{pathname:"/books",query:{show:1}}}>
                        <img src={"https://static.shiqichuban.com/react_simple/app/static/makebook_晒单分享.9732f637.png"} />
                    </Link>
                </div>
                <div onClick={this.setshow.bind(this,2)}>
                    <Link to={{pathname:"/books",query:{show:2}}}>
                        <img src={"https://static.shiqichuban.com/react_simple/app/static/makebook_恋人篇-01.4ecc1d68.jpg"} />
                    </Link>
                </div>
            </div>
        )
    }
}
