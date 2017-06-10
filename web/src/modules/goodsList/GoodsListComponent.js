import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as goodsListActions from './GoodsListAction.js'
import SpinnerComponent from '../spinner/SpinnerComponent'
import '../classify/commonrem.js'
import './GoodsList.scss'


class GoodsListComponent extends React.Component {
    constructor(props){
        super(props)
    }

    goodsListHandler(event){
        this.props.classify(event.target.getAttribute('data-index'))
        this.props.classifyGetData(event.target.getAttribute('data-id'))
    }
    
    render(){
        return(
            <div className="goodsList">
                <div className="goodsList-top">
                    <div className="main-logo">
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
                        <li className="active"><span>全部商品</span></li>
                        <li><span>销售</span></li>
                        <li><span>价格</span></li>
                        <li><span style={{"border-right":"0"}}>筛选<i className="fa fa-filter"></i></span></li>
                    </ul>
                </div>
                <div className="goodsList-main">
                    <div className="main-section">
                        123
                    </div>
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
export default connect(mapStateToProps, goodsListActions)(GoodsListComponent)
