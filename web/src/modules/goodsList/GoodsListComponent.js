import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Router, Route, hashHistory, Link} from "react-router"
import * as goodsListActions from './GoodsListAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import '../classify/commonrem.js'
import './GoodsList.scss'
class GoodsListComponent extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        this.props.fyGetData(this.props.num);

    }
    componentDidMount(){
        window.addEventListener('scroll', this.onScroll.bind(this));
    }
    goodsListHandler(event){
        this.props.goodsList(event.target.getAttribute('data-index'))
        this.props.goodsGetData();
    }
    localStorageHandler(event){
        window.localStorage.setItem("id",event.target.getAttribute('data-id'))
    }
    onScroll(){
        var ajax=this.props.loading
        console.log(ajax)
        var height = this.refs.main?this.refs.main.offsetHeight:600
        if(window.scrollY>height- window.innerHeight - 50 && !ajax && this.props.index==0  && this.props.num<=21){
            this.props.fyGetData(this.props.num)
        }
        if(window.scrollY>50){
            if(this.refs.top){
                this.refs.top.style.display='block'
            }
        }
        if(window.scrollY<50){
           if(this.refs.top){
                this.refs.top.style.display='none'
            }
        }
    }
    returnTop(){
        var timer = setInterval(()=>{
            // 先获取滚动过的距离
            var scrollTop = window.scrollY;//2000

            // 关键：利用滚动过的距离计算速度
            var speed = Math.ceil(scrollTop/5);

            // 设置滚动条滚动距离
            var _scrollTop = scrollTop - speed;

            console.log(scrollTop,_scrollTop,speed);

            if(_scrollTop <= 20){
                clearInterval(timer);
                _scrollTop = 0;
            }
            window.scrollTo(0,_scrollTop);   
        },30);
    }
    render(){
        console.log(this.props)
        return(
            <div className="goodsList">
            <div className="return-top" onClick={this.returnTop} ref="top"><i className="fa fa-arrow-circle-up"></i></div>
            <SpinnerComponent show={this.props.loading}/>
                <div className="goodsList-top">
                <Link to="classify">
                    <div className="main-logo">
                        <i className="fa fa-angle-left"></i>
                    </div>
                </Link>   
                    <div className="top-search">
                        <span>
                            <i className="fa fa-search"></i>
                        </span>
                        <input type="text" placeholder="搜索" id="search"/>
                    </div>
                </div>
                <div className="goodsList-sel">
                    <ul>
                        {
                            this.props.text.map(function(ele,index){
                                if(index==3){
                                    return <li onClick={this.goodsListHandler.bind(this)} data-index={index} data-id={index} className={this.props.index==index?'active':'none'}><span data-index={index}>{ele}<i data-index={index} className="fa fa-filter"></i></span></li>
                                }
                                return <li onClick={this.goodsListHandler.bind(this)} data-index={index} data-id={index} className={this.props.index==index?'active':'none'}><span data-index={index}>{ele}</span></li>               
                            }.bind(this))
                        } 
                    </ul>
                </div>
                <div className="goodsList-main" ref="main">
                    {
                        (this.props.goodsdata||[]).map((ele,index)=>{
                            if(this.props.goodsdata.length>1){
                                return <Link to="detail"><div className="main-section" data-id={ele.id} onClick={this.localStorageHandler}>
                                        <img data-id={ele.id} src={"../../../src/static/imgs/goods/"+(ele.imgUrl)[0]} onClick={this.localStorageHandler}/>
                                        <div data-id={ele.id} className="section-right" onClick={this.localStorageHandler}>
                                            <p data-id={ele.id} className="goodsName" onClick={this.localStorageHandler}>{(ele.name)[0]}</p>
                                            <p data-id={ele.id} className="goodsPrice" onClick={this.localStorageHandler}>¥{(ele.price)[0]}</p>
                                            <p data-id={ele.id} className="goodsSalenum" onClick={this.localStorageHandler}>销量:{ele.salesNum}</p>
                                        </div>
                                    </div></Link>
                            }
                        })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    active:state.goodsList.active,
    text:state.goodsList.text,
    index:state.goodsList.index,
    goodsdata:state.goodsList.goodsdata,
    loading:state.goodsList.loading,
    num:state.goodsList.num
})
export default connect(mapStateToProps, goodsListActions)(GoodsListComponent)
