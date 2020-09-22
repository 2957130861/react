import React, { Component } from 'react'

import Books1 from "./book/books1";
import Books2 from "./book/books2";
import Books3 from "./book/books3";
import Books4 from "./book/books4";
import GoBack from "./Goback/back";

import ShowOder from "./BookNav/showOder";
import Details from "./BookNav/details";

export default class MakeBook extends Component {

    constructor() {
        super();
        this.file = '';
        this.text = '';
    }

    showBooks = () => {
        // if(sessionStorage.getItem("show")!=""){
        //     if(sessionStorage.getItem("show")==1){
        //         return <ShowOder/>
        //     }else if(sessionStorage.getItem("show")==2){
        //         return <Details/>
        //     }
        // }else{
            let booksid = sessionStorage.getItem("booksid");
            switch (booksid) {
                case "1": return <Books1 />;
                case "2": return <Books2 />;
                case "3": return <Books3 />;
                case "4": return <Books4 />;
                default:return <Books2/>
            }
        // }
    }



    render() {
        return (
            <>
                <GoBack />
                {this.showBooks()}
            </>
        )
    }
}

