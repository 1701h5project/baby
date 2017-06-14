import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import VipWealComponent from './modules/VipWeal/VipWealComponent'
import GoodsWealComponent from './modules/GoodsWeal/GoodsWealComponent'
import ClearanceComponent from './modules/Clearance/ClearanceComponent'
import DiaperComponent from './modules/Diaper/DiaperComponent'
import LoginComponent from './modules/login/LoginComponent'
import RegisterComponent from './modules/register/RegisterComponent'
import PersonalComponent from './modules/personal/PersonalComponent'
import DetailComponent from './modules/detail/DetailComponent'
import ClassifyComponent from './modules/classify/ClassifyComponent'
import GoodsListComponent from './modules/goodsList/GoodsListComponent'
import ShopCarComponent from './modules/shopCar/ShopCarComponent'

export default (
    <Route>
        <Route path="/" component={AppComponent} />  
        <Route path="clearance" component={ClearanceComponent} /> 
        <Route path="vipweal" component={VipWealComponent} />
        <Route path="diaper" component={DiaperComponent} />
        <Route path="goodsweal" component={GoodsWealComponent} />
        <Route path="login" component={LoginComponent} />
        <Route path="register" component={RegisterComponent} />
        <Route path="personal" component={PersonalComponent}/>
        <Route path="detail" component={DetailComponent}/>
        <Route path="classify" component={ClassifyComponent}/>
        <Route path="goodsList" component={GoodsListComponent} />
        <Route path="shopCar" component={ShopCarComponent} />
    </Route>
)