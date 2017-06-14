import {Router,Route,Link,hashHistory} from 'React-Router'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as personalActions from './PersonalAction'

import './Personal.scss'
import './rem'

class PersonalComponent extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log(window.localStorage.getItem('userphone'))
        this.props.personal('account',window.localStorage.getItem('userphone')).then(reponse =>{
            
        })
    }

    outUserInfo(){
        window.localStorage.removeItem('userphone');
        hashHistory.push('login')
    }
    
    render(){
        return(
           <div className="personal">
                <div className="header">
                    <div className="user_photo">
                        <img src="src/static/imgs/05.jpg" alt=""/>
                    </div>
                    <div className="user_text">
                        <dl>
                            <dt id="dtName">{(this.props.data[0]||{"nickname":"请登录"}).nickname}</dt>
                            <dd>
                                <span>普通会员</span>
                                <span>LV 1</span>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="menu">
                    <p className="iconfont icon-order">我的订单</p>
                    <ul>
                        <li>
                            <Link><dl><dt className="iconfont icon-iconfontyinxingqia"></dt><dd>待付款</dd></dl></Link>
                        </li>
                        <li>
                            <Link><dl><dt className="iconfont icon-daifahuo"></dt><dd>待发货</dd></dl></Link>
                        </li>
                        <li>
                            <Link><dl><dt className="iconfont icon-daishouhuo"></dt><dd>待收货</dd></dl></Link>
                        </li>
                        <li>
                            <Link><dl><dt className="iconfont icon-praise-copy"></dt><dd>已完成</dd></dl></Link>
                        </li>
                        <li>
                            <Link><dl><dt className="iconfont icon-tuihuo"></dt><dd>退货</dd></dl></Link>
                        </li>
                    </ul>
                </div>
                <div className="menu_list">
                    <ul>
                        <li><span className="iconfont icon-dikouquan">抵扣券</span></li>
                        <li><span className="iconfont icon-tuangou">我的团</span></li>
                        <li><span className="iconfont icon-shoucang-shoucang">我的收藏</span></li>
                        <li><span className="iconfont icon-llcouponsupportedshopaddress">地址管理</span></li>
                        <li><span className="iconfont icon-shezhi">帐号设置</span></li>
                    </ul>
                </div>
                <div className="footer">
                    <ul>
                        <li className="home">
                        
                            <span></span>
                            <span>首页</span>
                        </li>
                        <li className="classify">
                            <Link to="/classify">
                                <span></span>
                                <span>分类</span>
                            </Link>
                        </li>
                        <li className="car">
                            <Link to="/shopCar">
                                <span></span>
                                <span>购物车</span>
                            </Link>
                        </li>
                        <li className="user">
                            <Link to="/personal">
                                <span></span>
                                <span>用户</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="out"><Link onClick={this.outUserInfo.bind(this)}>退出当前用户</Link></div>
           </div> 
        )
    }
}

const mapStateToProps = state => ({
    data:state.userInfo.data
})
export default connect(mapStateToProps, personalActions)(PersonalComponent)