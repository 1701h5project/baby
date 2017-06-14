import * as constants from '../../redux/commonConstant'

export function Add(id, name,salesNum,agioTitle,imgUrl,price,specification,parameter,imgFooter,produce){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'showAdd',
        method: 'post',
        query: {id:id, name:name,salesNum:salesNum,agioTitle:agioTitle,imgUrl:imgUrl,price:price,specification:specification,parameter:parameter,imgFooter:imgFooter,produce:produce}
    }
}
export function indexxun(id){
    // console.log(id)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'showData', 
        method: 'post',
        query: {'collection':'goods','id':id}
    }
}

