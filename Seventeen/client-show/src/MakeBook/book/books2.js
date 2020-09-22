import React, { Component } from 'react'
import "./css/books2.css"

import MyTextArea from "./myTextArea";
import UploadImg from "./imgBox"

export default class Books1 extends Component {

    render() {

        return (
            <>
                <div className="books2">
                    <UploadImg />
                    <MyTextArea myname="Text1" />
                </div>

            </>
        );
    }
}
