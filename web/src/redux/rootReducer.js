import login from '../modules/login/LoginReducer'
import classify from '../modules/classify/ClassifyReducer'
import {routerReducer as router} from 'react-router-redux'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    login,
    router,
    classify
})

export default rootReducer