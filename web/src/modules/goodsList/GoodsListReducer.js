import * as types from '../../redux/commonConstant'

export default function(state = {loading:false,text:['全部商品','销售','价格','筛选'],index:0}, action){
    let reState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.GOODSLIST_SEL:
            reState.active = 'active'
            reState.index=action.index
            break
        case types.REQUEST:
            reState.loading = true
            break
        case types.SUCCESS:
            if(reState.index == "0"){
                reState.goodsdata = action.body.data
                reState.lastFetched = action.lastFetched
                reState.loading = false
                break
            }
            if(reState.index == "1"){
                reState.goodsdata = action.body.data
                reState.lastFetched = action.lastFetched
                reState.loading = false
                break
            }
            if(reState.index == "2"){
                reState.goodsdata = action.body.data
                reState.lastFetched = action.lastFetched
                reState.loading = false
                break
            }
            reState.goodsdata = action.body.data
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case types.FAILURE:
            reState.error = action.error
            reState.loading = false
            break
        default:
            reState.active='none'
            reState.goodsdata=[]
    }
    return reState;
}