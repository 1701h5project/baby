import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as appAction from './AppAction'
import Slider from './Slider/Slider';
import SpinnerComponent from '../spinner/SpinnerComponent'
import './App.scss';
import './../../static/common/rem';


import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'
  




class AppComponent extends Component{
    constructor(props){
        super(props)
        
    }

    componentWillMount(){
        this.props.app('index')
      
    }
  

    backTop() {
                
           var time=setInterval(function(){
               //获取滚动条高度
                var osTop=document.documentElement.scrollTop||document.body.scrollTop;
                //每次上升高度
                var ispeed=Math.floor(-osTop/10);
                
                document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
                if(osTop==0){
                    clearInterval(time);
                }
            },30);
            

    }
    keyDown(e){
        	//绑定回车添加
		if(e.keyCode === 13 && e.target.value){
			
			window.localStorage.setItem('search',e.target.value);
            window.location.href = 'index.html#/goodsList'
		}
    }
    render(){
         const IMAGE_DATA = [
                {
                    src: require('../../static/imgs/index/banner1.jpg'),
                    alt: 'images-1',
                },
                {
                    src: require('../../static/imgs/index/banner2.jpg'),
                    alt: 'images-2',
                },
                {
                    src: require('../../static/imgs/index/banner3.jpg'),
                    alt: 'images-3',
                },
                {
                    src: require('../../static/imgs/index/banner4.jpg'),
                    alt: 'images-4',
                },
            ];
        return (
        
            <div id="container">
                <SpinnerComponent show={this.props.loading}/>
                <div className="go_Top">
                    <a href="javascript:;"  onClick={this.backTop.bind(this)}></a>
                </div>
                

                <div className="header">
                    <div className="header_Top">
                        <div className= "logo">
                            <p className="logo_Name"></p>
                        </div>
                        <div className="search">
                            <span></span>
                            <input type="text" placeholder="搜索" onKeyDown={this.keyDown.bind(this)}/>
                        </div>
                    </div>                   
                </div>
             
                <div className="main">
                    <div className="banner clearfix">
                        <Slider
                            items={IMAGE_DATA}
                            speed={1.2}
                            delay={2.1}
                            pause={true}
                            autoplay={true}
                            dots={true}
                            arrows={true}
                        />
                    </div>
                  
                    <div className="list_Links">
                        <ul className="links clearfix">
                            <li className="exclusive_prefecture">
                                <Link to='/vipweal'>
                                    <span></span>
                                    <span>新妈专享</span>
                                </Link>
                            </li>
                            <li className="milk_prefecture">
                                <Link to='/goodsweal'>
                                    <span></span>
                                    <span>奶粉</span>
                                </Link>
                            </li>
                            <li className="baby_prefecture">
                                <Link to='/clearance'>
                                    <span></span>
                                    <span>母婴淘</span>
                                </Link>
                            </li>
                            <li className="paper_prefecture">
                                <Link to='/diaper'>
                                    <span></span>
                                    <span>纸尿裤</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="new_user">
                        <a href="javascript:;">
                            <img src="src/static/imgs/index/newUser.jpg" alt="新用户专享" />
                        </a>
                    </div>
                    <div className="today_list">
                        <ul className="clearfix">
                            <li>
                                 <a href="#">
                                    <img src="src/static/imgs/index/today1.jpg" alt="" />                                 
                                 </a>                           
                            </li>
                            <li>
                                 <a href="#">
                                    <img src="src/static/imgs/index/today2.jpg" alt="" />                                 
                                 </a>                           
                            </li>
                            <li>
                                 <a href="#">
                                    <img src="src/static/imgs/index/today3.jpg" alt="" />                                 
                                 </a>                           
                            </li>
                        </ul>
                    </div>
                    <div className="prefecture">
                        <a href="#">
                            <img src="src/static/imgs/index/prefecture1.jpg" alt="" />
                        </a>
                        <a href="#">
                            <img src="src/static/imgs/index/prefecture2.jpg" alt="" />
                        </a>
                    </div>
                    <div className="list_title">
                        <h2>
                            <span>今日专场</span>
                        </h2>
                    </div>
                    <div className="today_goods">
                        <ul>
                            {
                             
                                 (this.props.data||[]).map(function(obj){
                                   return  (obj.today||[]).map(function(item){
                                         return <li>
                                            <div className="img_info">
                                                <a href="#">
                                                    <img src={`src/static/imgs/index/${item.imgInfo}`} alt="" />
                                                </a>
                                                <div className="SurplusTime">
                                                    <span></span>
                                                    <span>剩余7天</span>
                                                </div>
                                            </div>
                                            <div className="text_info">
                                                <span>{item.textInfo}</span>
                                                <span>{item.priceInfo}</span>
                                            </div>
                                        </li>
                                     })
                                    
                                })
                            }              
                        </ul>
                    </div>
                    <div className="list_title">
                        <h2>
                            <span>精选爆款</span>
                        </h2>
                    </div>
                    <div className="today_goods">
                        <ul>
                            {
                                
                                (this.props.data||[]).map(function(obj){
                                    return (obj.sift || []).map(function(item){
                                        return <li>
                                            <div className="img_info">
                                                <a href="#">
                                                    <img src={`src/static/imgs/index/${item.imgInfo}`} alt="" />
                                                </a>
                                                <div className="SurplusTime">
                                                    <span></span>
                                                    <span>剩余7天</span>
                                                </div>
                                            </div>
                                            <div className="text_info">
                                                <span>{item.textInfo}</span>
                                                <span>{item.priceInfo}</span>
                                            </div>
                                        </li>
                                    })
                                    
                                })
                            }
                        </ul>
                    </div> 
                    <div className="list_title">
                        <h2>
                            <span>今日特卖</span>
                        </h2>
                    </div>  
                    <div className="today_sale">
                        <ul>
                            {
                                (this.props.data||[]).map(function(obj){
                                    return (obj.special||[]).map(function(item){
                                        console.log(item)
                                        return <li>
                                                    <div className="clearfix">
                                                        <div className="img_left">
                                                        <a href="#">
                                                                <img src={`src/static/imgs/index/${item.imgInfo[0]}`}alt="" />
                                                        </a>
                                                        <span>{item.priceInfo[0]}</span>
                                                        </div>
                                                        <div className="img_right">
                                                            <div>
                                                                <a href="#">
                                                                    <img src={`src/static/imgs/index/${item.imgInfo[1]}`} alt="" />
                                                                </a>
                                                                <span>{item.priceInfo[1]}</span>
                                                            </div>
                                                            <div> 
                                                                <a href="#">
                                                                    <img src={`src/static/imgs/index/${item.imgInfo[2]}`} alt="" />
                                                                </a>
                                                                <span>{item.priceInfo[2]}</span>
                                                            </div>                       
                                                        </div>
                                                    </div>
                                                    <div className="discount_info">
                                                        <span></span>{item.favorableInfo}
                                                    </div>
                                                    <div className="brand_info">
                                                        <span className="brand_logo"><img src="src/static/imgs/index/brand1.jpg" alt="" /></span>
                                                        <span className="brand_text">
                                                            <p>{item.referral}</p>
                                                            <p>{item.time}<a>{item.count}</a></p>
                                                        </span>
                                                        <span className="brand_percent">{item.discount}</span>
                                                    </div>
                                                </li>
                                    })
                                })
                            }

                        </ul>
                    </div>
                    <div className="no_more">
                        <span></span>
                        <span>没有更多啦！</span>
                    </div>
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
            </div>
        )
    }
}

// export default AppComponent
const mapStateToProps = state => ({
    loading: state.login.loading,
    data:state.app.data,

})
export default connect(mapStateToProps, appAction)(AppComponent)