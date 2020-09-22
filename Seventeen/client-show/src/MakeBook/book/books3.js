import React, { Component } from 'react'
import "./css/books3.css"

import UploadImg from "./imgBox"
import MyTextArea from "./myTextArea";

export default class Books1 extends Component {

    render() {
        return (
            <>
                <div className="books3">
                    <MyTextArea myname="Text1" />
                    <UploadImg />
                </div>
            </>
        );
    }
}
