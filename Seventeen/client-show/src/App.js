import React,{Component} from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import {createHashHistory} from 'history';
import mystore from './Store.js'
import { Provider } from 'react-redux'
import Private from './PrivateWriting/Private'
import SmallCircle from './SmallCircle/Smallcircle'
// 做书
import MakeBook from "./MakeBook/MakeBook";
import Book from "./MakeBook/Book.js";
// import SeeAll from "./MakeBook/SeeAll.js";
import MakeingBooks from './MakingBooks/makeingBooks'
import MemberCenter from './MemberCenter/MemberCenter'
import Works from './works/works';
import Notice from './Notice/notice'
import ShoppingCar from './ShoppingCar/shoppingCar'
import MyNews from './Notice/myNews'
import Personal from './Notice/personal '
import Nav from './view/Nav'
import Login from './view/Login'
import Reset from './view/Reset'
const myHistory = createHashHistory()
export default class App extends Component {
    render() {
        return (
            <>
            <Provider store={mystore}>
                <Router history={myHistory}>
                {/* <Route exact={true} path="/" component={Main} /> */}
                    <Route exact={true} path="/" component={Nav}/>
                    <Route path="/private" component={Private} /> 
                    <Route path="/smallCircle" component={SmallCircle} />
                    <Route path="/makeingBooks" component={MakeingBooks} />
                    <Route path="/memberCenter" component={MemberCenter} />
                    <Route path="/works" component={Works} />
                    <Route path="/notice" component={Notice} />
                    <Route path="/shoppingCar" component={ShoppingCar} />
                    <Route path="/myNews" component={MyNews} />
                    <Route path="/personal" component={Personal} />
                    <Route path="/reset" component={Reset}/>
                    {/* 做书 */}
                    <Route path="/makebook" component={MakeBook} />
                    <Route path="/books" component={Book} />
                    {/* 重定向 */}
                </Router>
            </Provider>

            </>
        );
    }
} 