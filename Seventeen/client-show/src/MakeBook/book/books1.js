import React, { Component } from 'react'

import "./css/books1.css"

import MyTextArea from "./myTextArea";
import UploadImg from "./imgBox"

export default class Books1 extends Component {

    render() {

        return (
            <>
                {}
                <div className="books1">
                    <UploadImg getFile={this.props.getFile} />
                    <MyTextArea myname="Text1" getText={this.props.getText} />
                </div>
            </>
        );
    }
}
