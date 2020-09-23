import React from 'react'
import { Layout } from 'antd';
import HeadNav from '../seventeen/headNav'
import Privatewriteleft from './Privatewrite/Privatewriteleft'
import Privatewritecenter from './Privatewrite/Privatewritecenter'
import Privatewriteright from './Privatewrite/Privatewriteright'
import '../css/Privatewrite.css'
const {Header} = Layout;
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
            <>
            <Layout>
            <Header style={{padding:0}}><HeadNav/></Header>
            </Layout>
            <div className="Privatewrite">
                <Privatewriteleft app={this} />
                <Privatewritecenter app={this} bcxuanran={this.bcxuanran} />
                <Privatewriteright app={this} centerxinxi={this.state.centerxinxi} qingkong={this.state.qingkong}/>
            </div>
            </>
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
            qingkong:"",
            centerxinxi:e
        })
    }
    bcxuanran = ref => {
        this.child = ref
    }
}