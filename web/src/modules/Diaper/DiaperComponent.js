import React,{Component} from 'react';
import connect from 'react-redux';
import SpinnerComponent from './../spinner/SpinnerComponent'
import './Diaper.scss';
import './../../static/common/rem';
import BackTopComponent from './../backTop/BackTopComponent'

import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'

class DiaperComponent extends Component {
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
                    <span className="title">正品纸尿裤精选</span>
                </div>
                <div className="main">
                    <div className="title_img">
                        <a href="javascript:;">
                            <img src="src/static/imgs/index/title3.jpg" alt="" />
                        </a>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/diaper1.jpg" alt="" />
                        </a>
                    </div>
                    <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/diaper2.jpg" alt="" />
                        </a>
                    </div>
                    <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/diaper3.jpg" alt="" />
                        </a>
                    </div>
                    <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/diaper4.jpg" alt="" />
                        </a>
                    </div>
                    <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/diaper5.jpg" alt="" />
                        </a>
                    </div>
                    <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/diaper6.jpg" alt="" />
                        </a>
                    </div>
                    <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/diaper7.jpg" alt="" />
                        </a>
                    </div>
                    <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/diaper8.jpg" alt="" />
                        </a>
                    </div>
                    <div className="goods_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/goods_diaper1.jpg" alt="" />
                                </a>
                                <p className="goods_name">保税仓：Merries花王婴儿纸尿裤L54片适用9-14kg </p>
                                <p className="goods_price">￥79.00</p>
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
export default DiaperComponent;
