import * as constants from '../../redux/commonConstant'

export function app(index){
   
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
         path: 'app',
        method: 'post',
        query: {'name':index}
    }
}
