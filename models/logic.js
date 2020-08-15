const { ObjectId } = require('mongodb');

const student = {}

const MongoClient = require('mongodb').MongoClient;

var db = null;

var url = 'mongodb://localhost:27017';
    MongoClient.connect(url, function(error, client){
        //console.log("client",client)
        if(error){
            throw error;
        }
        db = client.db('eagle-payal-yadav');

        // var collection = db.collection('users');
        // console.log("collection", collection)


    });

student.retrieve = function(callback){
    var collection = db.collection('users');

    collection.find({}).toArray(function(error, response){
        if(error){
          return  callback(error)
        }
        console.log(response);
        return callback(null, response)
    })

}
student.delete = function(id, callback){
    console.log("id", id);
    if(!id){
        return callback("id invalid")
    }
    var collection = db.collection('users');
    collection.deleteOne({_id:  new ObjectId(id)   
    },function(error, success){
        if(error){
            return callback(error)
        }
        //console.log(success);
      return callback(null,"successfully deleted");

    });
}
student.add = function(username, name, age, city,callback){
    if(!username){
        return callback("username required")
    }
    if(!name){
        return callback("name required")
    }
    if(!age){
        return callback("age required")
    }
    if(!city){
        return callback("city required")
    }
    var collection = db.collection('users');
    collection.insertOne({
        username : username,
        name : name,
        age : age,
        city : city
    }, function(error, success ){
        if(error){
            return error
        }
        return callback(success)
    })

}

module.exports = student