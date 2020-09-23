import React from 'react';
import '../css/Nav.css';
import Login from './Login';
import cookie from 'react-cookies'
export default class nav extends React.Component{
    constructor(){
        super();
        this.state={
            isLogin:"none"
        }
    }
    navBtn1(){
        this.setState({
            isLogin:"block"
        })
    }
    navBtn2(){
        this.setState({
            isLogin:"block"
        })
    }
    bdBtn1(){
        this.setState({
            isLogin:"block"
        })
    }
    bdBtn2(){
        this.setState({
            isLogin:"block"
        })
    }
    render(){
        return(
            <div>
                <Login isLogin={this.state.isLogin}
                    history={this.props.history}
                />
                {/* 头部固定导航栏 */}
                <div className="nav-fixed">
                <div className="navImg"><img className="logoImg" src={require('../img/logo40.png')} /></div>
                <div className='navBtn'>
                    <button className='navBtn1' onClick={this.navBtn1.bind(this)}>下载app</button>
                    <button className='navBtn2' onClick={this.navBtn2.bind(this)}>登陆/注册</button>
                </div>
                </div>
                {/* 中间页面 */}
                <div className="middle">
                <div className="bdContent"><img className="bdImg" src={require('../img/bc1.png')} />
                <div className="bdBtn">
                    <div className="bdDIv1">
                        <button className="bdBtn1" onClick={this.bdBtn1.bind(this)}>做书/印制品</button>
                        <div className="bdText">把生活做成礼物</div>
                    </div>
                    <div className="bdDiv2">
                        <button className="bdBtn2" onClick={this.bdBtn2.bind(this)}>开始记录</button>
                        <div className="bdText">为未来记录样式</div>
                    </div>
                </div>
            </div>
        </div>
                {/* 中间过渡部分 */}
                <div className="line">
                    <span className="span1">.</span>
                    <span className="span2">.</span>
                    <span className="spanText">选择您喜欢的印品，可以开始制作了!</span>
                    <span className="span3">.</span>
                    <span className="span4">.</span>
                </div>
                {/* 全图片排列 */}
                <div className="picture">
                    <div className="picture1">
                        <img className="pictureImg1" src={require('../img/picture1.jpg')}/>
                    </div>
                    <div className="picture2">
                        <img className="pictureImg2" src={require('../img/picture2.jpg')}/>
                    </div>
                    <div className="picture3">
                        <img className="pictureImg3" src={require('../img/picture3.jpg')}/>
                    </div>
                    <div className="picture4">
                        <img className="pictureImg4" src={require('../img/picture4.jpg')}/>
                    </div>
                    <div className="picture5">
                        <img className="pictureImg5" src={require('../img/picture5.jpg')}/>
                    </div>
                    <div className="picture6">
                        <img className="pictureImg6" src={require('../img/picture6.jpg')}/>
                    </div>
                    <div className="picture7">
                        <img className="pictureImg7" src={require('../img/picture7.jpg')}/>
                    </div>
                </div>

                {/* 底部导航栏 */}
                <div className="bottom2">
                    <div className="bottomDiv1">拾柒 - 整理遇见更好的自己</div>
                    <div className="bottomDiv2">拾柒是一款提供 " 多平台记录,一键排版,精美印制 "</div>
                    <div className="bottomDiv3">的文化生活服务工具,你的私人文字管家!</div>
                </div>
    </div>
        )
    }
}