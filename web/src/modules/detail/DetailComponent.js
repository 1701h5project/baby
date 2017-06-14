import {Router,Route,Link,hashHistory} from 'React-Router'
import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as detailActions from './DetailAction'
import Slider from './../app/Slider/Slider';
import './Detail.scss'
import './rem'

// const IMAGE_DATA = [
//         {
//             src: require(imgUrl[0].props.src),
//             alt: 'images-1',
//         },
//         {
//             src: require(imgUrl[1].props.src),
//             alt: 'images-2',
//         },
//         {
//             src: require(imgUrl[2].props.src),
//             alt: 'images-3',
//         },
//         {
//             src: require(imgUrl[3].props.src),
//             alt: 'images-4',
//         },
// ]


class DetailComponent extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount() {
        var id = window.localStorage.getItem('id');
        id ? id : "p1"
        this.props.getInfo(id).then(reponse =>{
        
        });
    }
    addUsershopinfo(){
        console.log(window.localStorage.getItem('userphone'))
        if ( window.localStorage.getItem('userphone') != null && this.props.detailInfo != undefined&&this.props.detailInfo.length>0 ){
            let shopObj = this.props.detailInfo[0];
            shopObj.userPhone = window.localStorage.getItem('userphone')
            shopObj.qty = this.props.num;
            shopObj.collection = "address";
            console.log(shopObj)
            this.props.addUsershop(shopObj)
            // hashHistory.push('shopCar')
            alert('加入购物车成功!')
        }else{
            hashHistory.push('login')
        }
    }
    


    goBack(){
        window.history.back()
    }
    render(){
        let price,name,agioTitle,produce,specification,parameter,imgFooter,imgUrl
        if (this.props.detailInfo != undefined&&this.props.detailInfo.length>0){
            price = this.props.detailInfo[0].price[0];
            name = this.props.detailInfo[0].name;
            agioTitle = this.props.detailInfo[0].agioTitle;
            produce = this.props.detailInfo[0].produce;
            specification = this.props.detailInfo[0].specification;
            parameter = this.props.detailInfo[0].parameter.split(",").map(function(item){
                return <p>{item}</p>
            });
            imgFooter = this.props.detailInfo[0].imgFooter.map(function(item){
                return <img src={'src/static/imgs/goods/'+item+''}/>
            });
            imgUrl = this.props.detailInfo[0].imgUrl.map(function(item){
                return <img src={'src/static/imgs/goods/'+item+''}/>
            })
        }
    
        
        
       
        const { increment, decrement, detail } = this.props;
        return(
            
            <div className="detail">
                <div className="search">
                    <Link to="goodsList"className="iconfont icon-fanhui"></Link>
                    <span className="iconfont icon-search2"></span>
                    <input type="search" placeholder="搜索母婴商品"/>
                </div>
                <div className="show_img">
                    <img src={'src/static/imgs/goods/p1-1.jpg'}/>
                </div>
                <div className="show_detail">
                    <ul>
                        <li>￥ {price}</li>
                        <li>{name}</li>
                        <li>{agioTitle}</li>
                        <li>{produce}</li>
                    </ul>
                </div>
                <div className="specification">
                    <p>规格</p>
                    <span>{specification}</span>
                </div>
                <div className="show_comment">
                    <div>其它妈妈怎么说<span>99%</span>好评（1084人）</div>
                    <ul>
                        <li>1 5星 时间</li>
                        <li>一直是我信赖的奶粉，对宝宝各方面都很好</li>
                    </ul>
                </div>
                <div className="show_ad">
                    <img src="src/static/imgs/new_customer.png" alt=""/>
                </div>
                <div className="show_parameter">
                    <div>商品参数和使用指南</div>
                    {parameter}
                </div>
                <div className="show_imgFooter">
                    {imgFooter}
                </div>
                <div className="to_car">
                    <ul>
                        <li><i className="iconfont icon-gouwuche"></i><span></span></li>
                        <li>
                            <button className="btn_l" onClick={decrement}>-</button>
                            <input type="text" value={this.props.num}></input>
                            <button className="btn_r" onClick={increment}>+</button>
                        </li>
                        <li><Link to=""><p onClick={this.addUsershopinfo.bind(this)}>加入购物车</p></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    num: state.detail.num,
    detailInfo:state.detail.detailInfo
})

// const mapStateToProps = state => {
//     console.log(state)
//     return {
//         num: state.detail.num,
//         detailInfo:state.detail.detailInfo        
//     }
// }
export default connect(mapStateToProps, detailActions)(DetailComponent)