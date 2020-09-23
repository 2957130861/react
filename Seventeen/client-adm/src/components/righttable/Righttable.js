import React from "react"
import Usertable from "../table/Usertable"
import Booktable from "../table/Book"
import Roottable from "../table/Roottable"
import Userprivitetable from "../table/Userprivitetable"
export default class Righttable extends React.Component{
    constructor(){
        super()
    }
    tocurrent(){
        let page=this.props.page;
        if(page==1){
            return <Usertable />
        }else if(page==2){
            return <Roottable />
        }
        else if(page==3){
            return <Booktable/>
        }
        else if(page==4){
            return <Userprivitetable />
        }
    }
    render(){
        return this.tocurrent()
    }
}