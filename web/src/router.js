import React from 'react'
import {Route} from 'react-router'

import AppComponent from './modules/app/AppComponent'
import LoginComponent from './modules/login/LoginComponent'
import ClassifyComponent from './modules/classify/ClassifyComponent'
import GoodsListComponent from './modules/goodsList/GoodsListComponent.js'

export default (
    <Route path="/" component={AppComponent}>
        <Route path="login" component={LoginComponent} />
        <Route path="classify" component={ClassifyComponent} />
        <Route path="goodsList" component={GoodsListComponent} />
    </Route>
)