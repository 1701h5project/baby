import React,{Component} from 'react';
import connect from 'react-redux';
import SpinnerComponent from './../spinner/SpinnerComponent'
import './Clearance.scss';
import './../../static/common/rem';
import BackTopComponent from './../backTop/BackTopComponent'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'

class ClearanceComponent extends Component {
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
                    <span className="title">搬空保税仓</span>
                </div>
                <div className="main">
                    <div className="title_img">
                        <a href="javascript:;">
                            <img src="src/static/imgs/index/title2.jpg" alt="" />
                        </a>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/clearance1.jpg" alt="" />
                        </a>
                    </div>
                    <div className="clearance_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    

                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/clearance2.jpg" alt="" />
                        </a>
                    </div>
                     <div className="clearance_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/clearance3.jpg" alt="" />
                        </a>
                    </div>
                     <div className="clearance_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/clearance4.jpg" alt="" />
                        </a>
                    </div>
                     <div className="clearance_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/clearance5.jpg" alt="" />
                        </a>
                    </div>
                     <div className="clearance_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/clearance6.jpg" alt="" />
                        </a>
                    </div>
                     <div className="clearance_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="title_logo">
                        <a href="javascript:;">
                            <img  src="src/static/imgs/index/clearance7.jpg" alt="" />
                        </a>
                    </div>
                    <div className="clearance_Info">
                        <ul className="clearfix">
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <img src="src/static/imgs/index/clearance_goods1.jpg" alt="" />
                                </a>
                                <p className="clearance_name">
                                保税仓：moony尤妮佳婴幼儿纸尿裤NB90片适用新生-5kg
                                </p>
                                <p className="clearance_sale">海淘6月特价</p>
                                <a href="javascript:;" className="clearance_buy clearfix">
                                    <span>¥69.00</span>
                                    <span>立即抢购</span>
                                </a>
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

export default ClearanceComponent