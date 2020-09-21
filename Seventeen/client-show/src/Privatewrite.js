import React from 'react';
import Privatewriteleft from "./Privatewrite/Privatewriteleft.js"
import Privatewritecenter from "./Privatewrite/Privatewritecenter.js"
import Privatewriteright from "./Privatewrite/Privatewriteright.js"
import './Privatewrite/Privatewrite.css'

export default class Privatewrite extends React.Component {
    constructor(){
        super()
        this.state = {
            qingkong:"1",
            centerxinxi:""
        }
    }
    render() {
        return (
            <div className="Privatewrite">
                <Privatewriteleft app={this} />
                <Privatewritecenter app={this} bcxuanran={this.bcxuanran} />
                <Privatewriteright app={this} centerxinxi={this.state.centerxinxi} qingkong={this.state.qingkong}/>
            </div>
        )
    }
    myright(e){
        if(e){
            this.child.getPrivatewrite()
        }
    }
    myleft = e => {
        if(e){
            console.log(e)
            this.setState({
                qingkong:true
            })
        }
    }
    mycenter = (e) => {
        this.setState({
            centerxinxi:e
        })
    }
    bcxuanran = ref => {
        this.child = ref
    }
}