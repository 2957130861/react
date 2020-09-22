import React, { Component } from 'react'
import "./css/books4.css"

import MyTextArea from "./myTextArea";
import UploadImg from "./imgBox"

export default class Books1 extends Component {

    render() {

        return (
            <>
                <div className="books4">
                    <MyTextArea myname="Text1" />
                    <UploadImg />
                </div>

            </>
        );
    }
}
