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
        this.props.fyGetData(this.props.num);
        //this.props.classifyGetData(event.target.getAttribute('data-id'))
    }
    localStorageHandler(event){
        window.localStorage.setItem("id",event.target.getAttribute('data-id'))
    }
    goBack(){
        window.history.back()
    }
    onScroll(){
        var ajax=this.props.loading
        var height = document.getElementsByClassName('goodsList-main')[0].offsetHeight
        if(window.scrollY>height- window.innerHeight - 50 && !ajax && this.props.index==0 && this.props.num<=(this.props.count+6)){
            this.props.fyGetData(this.props.num)
        }
        if(window.scrollY>50){
            document.getElementsByClassName('return-top')[0].style.display="block"
        }
        if(window.scrollY<50){
            document.getElementsByClassName('return-top')[0].style.display="none"
        }
    }
    returnTop(){
         document.body.scrollTop=0;
    }
    render(){
        console.log(this.props.count,this.props.num)
        return(
            <div className="goodsList">
            <div className="return-top" onClick={this.returnTop}><i className="fa fa-arrow-circle-up"></i></div>
            <SpinnerComponent show={this.props.loading}/>
                <div className="goodsList-top">
                    <div className="main-logo">
                    <Link to="classify">
                        <i className="fa fa-angle-left"></i>
                    </Link>
                    </div>
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
                <div className="goodsList-main">
                    {
                        this.props.goodsdata.map((ele,index)=>{
                            if(this.props.goodsdata.length>1){
                                return <Link to=""><div className="main-section" data-id={ele.ID} onClick={this.localStorageHandler}>
                                        <img data-id={ele.ID} src={"../../../src/static/imgs/goods/"+(ele.imgUrl)[0]}/>
                                        <div data-id={ele.ID} className="section-right">
                                            <p data-id={ele.ID} className="goodsName">{(ele.name)[0]}</p>
                                            <p data-id={ele.ID} className="goodsPrice">¥{(ele.price)[0]}</p>
                                            <p data-id={ele.ID} className="goodsSalenum">销量:{ele.salesNum}</p>
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
    num:state.goodsList.num,
    count:state.goodsList.count
})
export default connect(mapStateToProps, goodsListActions)(GoodsListComponent)
