import React from 'react'
import MyBook from './Rcontent/myBook'
import FriendBook from './Rcontent/friendBook'
import LonoCard from './Rcontent/lomoCard'
import TogetherBook from './Rcontent/togetherBook'
export default class RightContent extends React.Component {
    constructor() {
        super();
        this.state = {
        }
	}
	curentContent() {
        let page = this.props.page;
		if(page=="1") {
			return <MyBook/>
		}else if(page=="2") {
			return <FriendBook/>
		}else if(page=="3") {
			return <LonoCard/>
		}else if(page=="4") {
            return <TogetherBook/>
        }
	} 
	render() {
        return this.curentContent() 
	}
}