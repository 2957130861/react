import React, { Component } from 'react';
import { Link } from "react-router-dom"; 

import {
    CaretDownOutlined,
    RightOutlined
} from '@ant-design/icons';

export default class Top extends Component {
    render() {
        return (
            <div className="top">
                <span className="ownwork">
                    我的作品
                    <CaretDownOutlined />
                </span>
                <span className="all" >
                    <Link to="/seeall">查看全部</Link>
                    <RightOutlined />
                </span>
            </div>
        )
    }
}
