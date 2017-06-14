import React,{Component} from 'react';
import connect from 'react-redux';
import SpinnerComponent from './../spinner/SpinnerComponent'
import './backTop.scss';
import './../../static/common/rem';

import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router'

class BackTopComponent extends Component {
    constructor(props){
        super(props)
    }
    backTop(){

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
    render(){
        return(
            <div className="backTop" onClick={this.backTop.bind(this)}>
                <a href="javascript:;"></a>
            </div>
        )
    }
}        

export default BackTopComponent