var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app){
    app.post('/login', urlencodedParser, function(request, response){
        if(!request.body || !request.body.username){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.password){
            response.send(ApiResult(false, '密码不能为空！'));
        } else {
            DB.get('account', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(!data[0]){
                        response.send(ApiResult(false, '用户名不存在！'));
                    } else if(data[0].password != request.body.password){
                        response.send(ApiResult(false, '密码错误！'));
                    } else {
                        response.send(ApiResult(true));
                    }
                }
            })
        }
    });

    app.post('/register', urlencodedParser, function(request, response){
        console.log(request.body)
        if(!request.body || !request.body.username){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.password){
            response.send(ApiResult(false, '密码不能为空！'));
        } else if(!request.body || !request.body.nickname){
            response.send(ApiResult(false, '昵称不能为空！'));
        } else {
            delete request.body.repassword;
            DB.get('account', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(data[0]){
                        response.send(ApiResult(false, '用户名已被注册'));
                    } else {
                        DB.insert('account', request.body, function(insertResult){
                            response.send(insertResult);
                        })
                    }
                }
            })
        }        
    })

     
    //获取classify数据
    app.post('/showClassifyData',urlencodedParser,function(request,response){
        var obj = request.body;
        console.log(obj.collection)
        console.log(request.body)
        DB.showClassifyData(obj.collection,request.body,function(result){
          response.send(result);
        }); 
    })
     //获取goodslist数据
    app.post('/showGoodsData',urlencodedParser,function(request,response){
        var obj = request.body;

        DB.showClassifyData(obj.collection,request.body,function(result){
          response.send(result);
        }); 
    })
    //分页获取数据
    app.post('/goods-Fy',urlencodedParser,function(request,response){
        var obj = request.body;

        DB.Fydata(obj.collection,request.body,function(result){
          response.send(result);
        }); 
    });

}