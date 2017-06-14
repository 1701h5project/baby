import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Router, Route, hashHistory, Link } from 'react-router'
import {bindActionCreators} from 'redux'
import * as ShopCarActions from './ShopCarAction'
import SpinnerComponent from '../spinner/SpinnerComponent'
// import '../../static/styles/common.scss'
import './shopCar.scss'

// @connect(
//     state => ({
//         loading: state.ShopCar.loading
//     }),
//     ShopCarActions
// )

class ShopCarComponent extends React.Component {
    constructor(props){
        super(props)
        //this.state = {checked:false}        
    }

	increment(id,qty){
        let arr =  qty +1
        //this.refs.value.value = arr
        this.props.decrement({'_id':id,'data':JSON.stringify({"qty":arr})})
        //this.props.shopCar(sessionStorage.getItem('phone','value'))
        // window.location.reload()         
	}

	decrement(id,qty){
        if(qty >=1){qty -=1}
        else{qty =0}
        //this.refs.value.value = qty
        this.props.decrement({"_id":id,"data":JSON.stringify({"qty":qty})})
        //this.props.shopCar(sessionStorage.getItem('phone','value'))
        // window.location.reload()       
	}

    remove(id){
        this.props.remove({"_id":id})
        //this.props.shopCar(sessionStorage.getItem('phone','value'))
        // window.location.reload()    
    }

    componentWillMount() {  
        this.props.shopCar(localStorage.getItem('userphone','value'))
        //console.log(this.refs.price.value)
        //返回的数据
        //  .then(function(response){
        //      console.log(response)
        //     let resObj = this.props.dataing
        //     console.log(resObj.data)
        //     if(resObj.status == true){
                      
        //     }else{
        //        // this.setState({datas: resObj.data}) 
        //         //console.log('2:', resObj.data)
        //         //alert(resObj.dataing)
        //     }
        // }.bind(this))
	}

    check(id,check){
        //console.log(id)
        //console.log(true == 'false')
       //console.log(e.target.getAttribute('data-ischeck'))
        if(check == 'false'){
            this.props.check({"_id":id,"data":JSON.stringify({"check":'true',"color":"#f60"})})
        }else{
            this.props.check({"_id":id,"data":JSON.stringify({"check":'false',"color":"#fff"})})
        }
        window.location.reload()
        //{"_id":id,"data":JSON.stringify({"qty":qty})
        //let  index = event.target.index?index:
        //this.props.check(id)
    }

    goback(){
       history.back();
    }

    render(){
        //var self = this
        if((localStorage.getItem('userphone','value') != null) && (this.props.dataing.data !=undefined) && (this.props.dataing.data.length>0)){
           console.log(this.props.dataing.data)
            var res = 0;
            var arr = [];
            var items = this.props.dataing.data
            var itemHtml = items.map(function(item,index){
                //console.log(item.(0[id]))
                return <li key={index} className="product" id={"product"+index}>
                    <div className="checkbox_add"><span style={{'background':item.color}} data-ischeck={item.check} onClick={this.check.bind(this,item._id,item.check)}></span></div>
                    <div className="img"><a href={item.http} ><img src={'src/static/imgs/goods/'+item.imgUrl[0]} alt=""/></a></div>
                    <div className="introduce"><a href="">{item.name}</a>
                    <span className="btnMinus" onClick={this.decrement.bind(this,item._id,item.qty)}>-</span>
                    <input type="text" value={item.qty} ref='value'/><span className="btnAdd" onClick={this.increment.bind(this,item._id,item.qty)}>+</span></div>
                    <div className="toprice"><span>￥</span><span className="price">{item.price}</span></div>
                    
                    
                    <div className="del" onClick={this.remove.bind(this,item._id)}>x</div>
                </li>;
            }, this)
            return(
                <div className="shopCar">
                    <header><i className="go-back" onClick={this.goback.bind(this)}>  &lt; </i><span>购 物 车</span></header>
                   
                    <ul className="shopadd">{itemHtml}</ul>
                    <SpinnerComponent show={this.props.loading}/>                   
                    <div className="totalPrice">
                        <div className="checkall"><input type="checkbox"/>全选</div>
                        <div className="jiage">
                            <p>总计：<span>￥</span><span className="zongji">{                      
                               items.map(function(item,index){
                                   if(item.check=='true'){
                                        res +=  Number(item.price*item.qty)
                                   }                                   
                                })}{res}
                                </span></p>
                            <p>(不含运费、综合税)</p>
                        </div>
                        <Link to="/login" className="gobtn">去结算</Link>
                    </div>                
                    <footer>
                        <ul>
                            <li><Link to="login">
                                <img src="src/static/imgs/m-icon1.png" alt=""/>
                                <span>首页</span>
                                </Link>
                            </li>
                            <li><Link to="classify">
                                <img src="src/static/imgs/m-icon2.png" alt=""/>
                                <span>分类</span>
                                </Link>
                            </li>
                            <li><a href="javascript:void(0)">
                                <img src="src/static/imgs/m-icon3-1.png" alt=""/>
                                <span style={{'color':"#f60"}}>购物车</span>
                                </a>
                            </li>
                            <li><Link to="login">
                                <img src="src/static/imgs/m-icon4.png" alt=""/>
                                <span>账户</span>
                                </Link>
                            </li>
                        </ul> 
                    </footer>
                </div>
            )           
        }
        else{
            return(
                <div className="shopCar">
                    <header><i className="go-back" onClick={this.goback}> &lt; </i><span>购 物 车</span></header>
                    <div className="shopnull">
                        <img src="src/static/imgs/img_null.png" alt=""/>
                        <p>您的购物车空空如也~</p>
                        <Link to="/login">去首页看看</Link>
                    </div>          
                    <footer>
                         <ul>
                            <li><Link to="login">
                                <img src="src/static/imgs/m-icon1.png" alt=""/>
                                <span>首页</span>
                                </Link>
                            </li>
                            <li><Link to="classify">
                                <img src="src/static/imgs/m-icon2.png" alt=""/>
                                <span>分类</span>
                                </Link>
                            </li>
                            <li><a href="javascript:void(0)">
                                <img src="src/static/imgs/m-icon3-1.png" alt=""/>
                                <span style={{'color':"#f60"}}>购物车</span>
                                </a>
                            </li>
                            <li><Link to="login">
                                <img src="src/static/imgs/m-icon4.png" alt=""/>
                                <span>账户</span>
                                </Link>
                            </li>
                        </ul> 
                    </footer>
                </div>
            )
        }

    }
}
//将reducer绑定到props上
const mapStateToProps = state => ({
    loading: state.shopCar.loading,
    dataing: state.shopCar.dataing,
    //checking: state.check.loading
    //return state
})
  
//将action的所有方法绑定到props上
const mapDispatchToProps = dispatch => {
	//console.log(bindActionCreators(ShopCarActions, dispatch));
  	return bindActionCreators(ShopCarActions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopCarComponent)
// export default ShopCarComponent