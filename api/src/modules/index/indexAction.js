import * as constants from '../../redux/commonConstant'
// 获取数据
export function index(goods){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'showData', 
        method: 'post',
        query: {'collection':'goods'}
    }
}
// export function indexs(id){
//     // console.log(id)
//     return {
//         types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
//         path: 'showData', 
//         method: 'post',
//         query: {'id':id}
//     }
// }
// 查询
export function indexxun(id){
    // console.log(id)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'showData', 
        method: 'post',
        query: {'collection':'goods','id':id}
    }
}
// 删除
export function indexdel(asd){
    // console.log(asd)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'showRemove',
        method: 'post',
        query: {'id':asd}
    }
}
// export function indexup(q,w,e,r,a,s){
//     // console.log(asd)
//     return {
//         types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
//         path: 'updateData',
//         method: 'post',
//         query: {q,w,e,r,a,s}
//     }
// }

// export function login(username, password){
//     return {
//         type: 'aa'
//     }
// }