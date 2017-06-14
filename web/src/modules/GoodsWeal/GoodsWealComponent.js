import React,{Component} from 'react';
import connect from 'react-redux';
import SpinnerComponent from './../spinner/SpinnerComponent'
import './GoodsWeal.scss';
import './../../static/common/rem';
import BackTopComponent from './../backTop/BackTopComponent'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'


class GoodsWealComponent extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="container">
                 <div className="backIndex">
                   <Link to='/'></Link>
                </div>
                <BackTopComponent />
                    
                <div className="header">
                    <a href="javascript:history.go(-1);" className="backPrev"></a>
                    <span className="title">奶粉精选</span>
                </div>
                <div className="main">
                    <div className="title_img">
                        <a href="javascript:;">
                            <img src="src/static/imgs/index/title01.jpg" alt="" />
                        </a>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/logo01.jpg" alt="" />
                        </a>
                    </div>
                    <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/logo02.jpg" alt="" />
                        </a>
                    </div>
                    <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/logo03.jpg" alt="" />
                        </a>
                    </div>
                                        <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/logo04.jpg" alt="" />
                        </a>
                    </div>
                                        <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/logo05.jpg" alt="" />
                        </a>
                    </div>
                                        <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/logo06.jpg" alt="" />
                        </a>
                    </div>
                                        <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/logo07.jpg" alt="" />
                        </a>
                    </div>
                                        <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/logo08.jpg" alt="" />
                        </a>
                    </div>
                                        <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/logo09.jpg" alt="" />
                        </a>
                    </div>
                                        <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/logo10.jpg" alt="" />
                        </a>
                    </div>
                                        <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/logo11.jpg" alt="" />
                        </a>
                    </div>
                                        <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/logo12.jpg" alt="" />
                        </a>
                    </div>
                                        <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/logo13.jpg" alt="" />
                        </a>
                    </div>
                                        <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goodsInfo1.jpg" alt="" />
                                </a>
                                <p className="goods_name">Aptamil爱宝美1段婴儿配方奶粉800g（德国原装进口）</p>
                                <p className="goods_price">￥220.00</p>
                            </li>
                        </ul>
                    </div>
                </div>
                
                 <div className="footer">
                    <ul>
                        <li className="login">
                            <span></span>
                            <span>登录</span>
                        </li>
                        <li className="register">
                            <span></span>
                            <span>注册</span>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default GoodsWealComponent