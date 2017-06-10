import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as classifyActions from './ClassifyAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
import './commonrem.js'
import './Classify.scss'
import './font-awesome-4.7.0/css/font-awesome.css'
var hasdata=false
class ClassifyComponent extends React.Component {
    constructor(props){
        super(props)
    }

    classifyHandler(event){
        this.props.classify(event.target.getAttribute('data-index'))
        this.props.classifyGetData(event.target.getAttribute('data-id'))
    }
    
    render(){
        if(!hasdata){
            this.props.classifyGetData('classify0')
            hasdata=true
        } 
        return(
            <div className="classify">
                <div className="classify-top">
                    <div className="main-logo">
                        <img src="../../../src/static/imgs/classify/main-logo.png"/>
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
                        <SpinnerComponent show={this.props.loading}/>
                        {
                            (this.props.data||[]).map((eles,index)=>{
                                return <div className="section">
                                            <div className="title">{eles.title}</div>
                                            <div className="content">
                                                {(eles.imgurl||[]).map((ele,index)=>{
                                                    return <div className="content-section">
                                                        <img src={"../../../src/static/imgs/classify/"+ele}/>
                                                        <span>{eles.name[index]}</span>
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                            })
                        }
                    </div>
                </div>
                <div className="classify-bottom">
                    <ul>
                        <li>
                            <i id="home"></i>
                            <span>首页</span>
                        </li>
                        <li>
                            <i id="classify"></i>
                            <span id="classify-font2">分类</span>
                        </li>
                        <li>
                            <i id="buycar"></i>
                            <span>购物车</span>
                        </li>
                        <li>
                            <i id="center"></i>
                            <span>帐号</span>
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
