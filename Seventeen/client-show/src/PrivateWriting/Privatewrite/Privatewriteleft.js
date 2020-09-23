import React from 'react';
import establish from "../../img/chuangjian.png"
import recovery from "../../img/huishou.png"

export default class Privatewriteleft extends React.Component {
    render() {
        return (
            <div className="Privatewriteleft">
                    <div  onClick={this.cj.bind(this)} className="Privatewriteleft-top">
                        <img src={establish}/>
                        <div>创建文章</div>
                    </div>
                    <div className="Privatewriteleft-bottom">
                        <img src={recovery}/>
                        <div>回收站</div>
                    </div>
            </div>
        )
    }
    cj(){
        this.props.app.myleft(true)
    }
}