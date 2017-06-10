var ApiResult = require('./ApiResult')

var MongoDB = require('mongodb');
var MongoDBServer = new MongoDB.Server('localhost', 27017);
var db = new MongoDB.Db('test', MongoDBServer);

module.exports = {
    get: function(_collection, _condition, _callback){
        db.open(function(dberror){
            if(dberror){
                _callback(ApiResult(false, null, dberror));
                return;
            }

            db.collection(_collection, function(collerror, collection){
                if(collerror){
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                var condition = _condition || {};
                collection.find(condition).toArray(function(resulterror, dataset){
                    if(resulterror){
                        _callback(ApiResult(false, null, resulterror));    
                    } else {
                        _callback(ApiResult(true, null, dataset));
                    }
                })
            })
            db.close();
        })
    },
    insert: function(_collection, _newdata, _callback){
        db.open(function(dberror){
            if(dberror){
                _callback(ApiResult(false, null, dberror));
                return;
            }

            db.collection(_collection, function(collerror, collection){
                if(collerror){
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                collection.insert(_newdata, function(resulterror, result){
                    if(resulterror){
                        _callback(ApiResult(false, null, resulterror));
                    } else {
                        _callback(ApiResult(true, null, result));
                    }
                })
            })
            db.close();
        })
    },
    showClassifyData:function(_collection,data,callback){
        db.open(function(error,db){
            if(error){
                console.log('connect db:', error);
            }
            //Account => 集合名（表名）
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)
                } else {
                    if(data.id != null ){
                        console.log(data.id)
                        if(data.name){
                            var str = data.name;
                            db.collection(data.collection,function(error,collection){
                                collection.find( { name: { $regex: str, $options: 'i' } } ).toArray(function(error,result){
                                    if(error){
                                        callback(ApiResult(false, null, error));
                                    } else {
                                        callback(ApiResult(true, null, result));
                                    }
                                });
                            })
                        }else{
                            var str = data.id;
                            var arr = str.split(',');
                            db.collection(data.collection,function(error,collection){
                                collection.find({ID:{$in: arr}}).toArray(function(error,result){
                                    if(error){
                                        callback(ApiResult(false, null, error));
                                    } else {
                                        callback(ApiResult(true, null, result));
                                    }
                                });
                            })                      
                        }
                    }else{
                        db.collection(data.collection,function(error,collection){
                            collection.find().limit(100).toArray(function(error,result){
                                if(error){
                                    callback(ApiResult(false, null, error));
                                } else {
                                    callback(ApiResult(true, null, result));
                                }
                            })
                        })          
                    }
                        
                }
                db.close();
            })      
        })
    }

}