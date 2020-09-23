import React from 'react'
import '../css/headNav.css'
import logo40 from '../img/logo40.png'
import {Link} from 'react-router-dom'
export default class headNav extends React.Component {
    render() {
        return (
        <>
            <div className="nav-fixed">
                <div className="navImg"><img className="logoImg" src={logo40}/></div>
                <div className='leftnav'>
                    <span><Link to={{pathname:'/private'}}>私密写</Link></span>
                    <span><Link to={{pathname:'/smallCircle'}}>小圈</Link></span>
                    <span><Link to={{pathname:'/makebook'}}>做书/印品</Link></span>
                    <span><Link to={{pathname:'/memberCenter'}}>会员中心</Link></span>
                </div>
                <div className='rightnav'>
                    <span><Link to={{pathname:'/works'}}>我的作品</Link></span>
                    <span><Link to={{pathname:'/notice'}}>通知</Link></span>
                    <span style={{fontSize:'12px'}} ><Link to={{pathname:'/personal'}}>个人中心</Link></span>
                </div>
            </div>
        </>
        )
    }
}