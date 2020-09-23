import React from 'react'
import { Layout } from 'antd';
import MyNews from '../Notice/myNews'
const {Content} = Layout;
export default class Notice extends React.Component {
    render(){
        return (
            <>
                <Content><MyNews/></Content>
            </>
        )
    }
}