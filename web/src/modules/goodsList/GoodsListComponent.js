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
        this.props.goodsGetData()
    }
    componentDidMount(){
        window.addEventListener('scroll', this.onScroll.bind(this));
    }
    goodsListHandler(event){
        this.props.goodsList(event.target.getAttribute('data-index'))
        this.props.goodsGetData()
        //this.props.classifyGetData(event.target.getAttribute('data-id'))
    }
    localStorageHandler(event){
        window.localStorage.setItem("ID",event.target.getAttribute('data-id'))
    }
    goBack(){
        window.history.back()
    }
    onScroll(){
        console.log(window.scrollY)
        var height = document.getElementsByClassName('goodsList-main')[0].offsetHeight
        console.log(height- window.innerHeight - 50)
        if(window.scrollY>height- window.innerHeight - 50){
            console.log(444)
        }
    }
    render(){
        return(
            <div className="goodsList">
            <SpinnerComponent show={this.props.loading}/>
                <div className="goodsList-top">
                    <div className="main-logo" onClick={this.goBack}>
                        <i className="fa fa-angle-left"></i>
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
                                    return <li onClick={this.goodsListHandler.bind(this)} data-index={index} data-id={index} className={this.props.index==index?'active':'none'}><span data-index={index}>{ele}<i className="fa fa-filter"></i></span></li>
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
    loading:state.goodsList.loading
})
export default connect(mapStateToProps, goodsListActions)(GoodsListComponent)
