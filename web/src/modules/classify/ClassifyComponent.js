import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as classifyActions from './ClassifyAction'
import {Router, Route, hashHistory, Link} from "react-router"
import SpinnerComponent from '../spinner/SpinnerComponent'
import './commonrem.js'
import './Classify.scss'
import './font-awesome-4.7.0/css/font-awesome.css'
var hasdata=false;
class ClassifyComponent extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        var zz = window.localStorage.getItem('zz')
        this.props.classifyGetData(zz ||'classify0')
    }
    classifyHandler(event){
        window.localStorage.setItem('zz',event.target.getAttribute('data-id'))
        this.props.classify(event.target.getAttribute('data-index'))
        this.props.classifyGetData(event.target.getAttribute('data-id'))
    }
    goBack(){
        window.history.back()
    }
    render(){
        console.log(this.props.data)
        let dataClassify=1
        if(this.props.data.length>0 && this.props.data[0].hasOwnProperty('content')){
            dataClassify=((this.props.data[0]).content).map((eles,index)=>{
                                if(eles.title){
                                    return <div className="section">
                                            <div className="title">{eles.title}</div>
                                            <div className="content">
                                                {(eles.imgurl||[]).map((ele,index)=>{
                                                    return <Link to="goodsList">
                                                                <div className="content-section">
                                                                    <img src={"../../../src/static/imgs/classify/"+ele}/>
                                                                    <span>{eles.name[index]}</span>
                                                                </div>
                                                            </Link>
                                                })}
                                            </div>
                                        </div>
                                }     
                            })
        }
        return(
            <div className="classify">
            <SpinnerComponent show={this.props.loading}/>
                <div className="classify-top">
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
                <div className="classify-main">
                    <div className="main-left">
                        <ul>
                            {
                                this.props.text.map(function(ele,index){
                                    return <li onClick={this.classifyHandler.bind(this)} data-index={index} data-id={"classify"+index} className={this.props.index==index?'active':'none'}>{ele}</li>
                                }.bind(this))
                            }
                        </ul>
                    </div>
                    <div className="main-right">
                        {
                            dataClassify
                        }
                    </div>
                </div>
                <div className="classify-bottom">
                    <ul>
                        <li>
                        <Link to="/">
                            <i id="home"></i>
                            <span>首页</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="classify">
                            <i id="classify"></i>
                            <span id="classify-font2">分类</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="shopCar">
                            <i id="buycar"></i>
                            <span>购物车</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="login">
                            <i id="center"></i>
                            <span>帐号</span>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    active: state.classify.active,
    text:state.classify.text,
    index:state.classify.index,
    data:state.classify.data,
    loading:state.classify.loading
})
export default connect(mapStateToProps, classifyActions)(ClassifyComponent)
