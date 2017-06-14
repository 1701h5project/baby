import login from '../modules/login/LoginReducer'
import register from '../modules/register/RegisterReducer'
import userInfo from '../modules/personal/PersonalReducer'
import detail from '../modules/detail/DetailReducer'
import classify from '../modules/classify/ClassifyReducer'
import goodsList from '../modules/goodsList/GoodsListReducer'
import shopCar from '../modules/shopCar/ShopCarReducer'
import app from '../modules/app/AppReducer'
import {routerReducer as router} from 'react-router-redux'


import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    app,
    login,
    register,
    userInfo,
    detail,
    router,
    classify,
    goodsList,
    shopCar
})

export default rootReducer