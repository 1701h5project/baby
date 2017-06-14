import * as constants from '../../redux/commonConstant'
//ajax
export function shopCar(phone){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'getaddress',
        method: 'post',
        query: {phone}
    }
}
//点击增加1更新数据
export function increment(item){
    console.log(item)
	return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'updataadress',
        method: 'post',
        query: item
    }
}
//点击减少1更新数据
export function decrement(item){
    console.log(item)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'updataadress',
        method: 'post',
        query: item
    }
}
//删除
export function remove(item){
     return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'deladdress',
        method: 'post',
        query: item
    }
}
//点击选中
export function check(item){
    console.log(item)
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'updataadress',
        method: 'post',
        query: item
    }
    //  console.log(checked)
    // if(checked){
    //     return {
    //         type:[constants.CHECKED],
    //         checked:1
    //     }
    // }else{
    //     return {
    //         type:[constants.UN_CHECKED],
    //         checked:0
    //     }
    // }
}