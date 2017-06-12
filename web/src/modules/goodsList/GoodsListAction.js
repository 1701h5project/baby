import * as constants from '../../redux/commonConstant'

// export function login(username, password){
//     return {
//         types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
//         path: 'login',
//         method: 'post',
//         query: {username, password}
//     }
// }

export function goodsList(index){
    return {
        type: constants.GOODSLIST_SEL,
        index:index
    }
}
export function goodsGetData(index){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'showGoodsData',
        method: 'post',
        query: {'collection':'goods'}
    }
}