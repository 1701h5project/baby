import React,{Component} from 'react';
import connect from 'react-redux';
import SpinnerComponent from './../spinner/SpinnerComponent'
import './VipWeal.scss';
import './../../static/common/rem';
import BackTopComponent from './../backTop/BackTopComponent'
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'

class VipWealComponent extends Component {
     constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="container">
                <div className="backIndex">
                    <Link to='/'></Link>
                </div>
                <BackTopComponent/>
                    
                <div className="header">
                    <a href="javascript:history.go(-1);" className="backPrev"></a>
                    <span className="title">新人福利</span>
                </div>
                <div className="main">
                    <div className="weal_Msg">
                        <a href="javascript:;">
                            <img src="src/static/imgs/index/vipweal01.jpg" alt="" />
                        </a>
                        <a href="javascript:;">
                            <img src="src/static/imgs/index/vipweal02.jpg" alt="" />
                        </a>
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

export default VipWealComponent
// const mapStateToProps = state => ({
//     loading: state.login.loading
// })
// export default connect(mapStateToProps, appAction)(AppComponent)