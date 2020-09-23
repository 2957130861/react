import React from 'react'
import './headNav.css'
import logo40 from '../../img/logo40.png'
// import {Link} from 'react-router-dom'
export default class headNav extends React.Component {
    render() {
        return (
        <>
            <div className="nav-fixed">
                <div className="navImg"><img className="logoImg" src={logo40}/></div>
                <div className='leftnav'>
                </div>
                <div className='rightnav'>
                </div>
            </div>
        </>
        )
    }
}