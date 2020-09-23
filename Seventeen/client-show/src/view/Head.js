import React from 'react';
import { Link } from "react-router-dom";
import logo40 from '../img/logo40.png';
export default class Head extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
                <div className="nav-fixed">
                    <div className="navImg"><img className="logoImg" src={logo40} /></div>
                    <div className='navBtn'>
                        <button className='navBtn1'>下载app</button>
                        
                        <button className='navBtn2'>
                            <Link to="/"><span style={{Color:"red"}}>登陆/注册</span></Link>
                            </button>
                        
                    </div>
                </div>
            </>
        )
    }
}

