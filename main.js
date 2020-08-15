
const MongoClient = require('mongodb').MongoClient;
const csv=require('csvtojson')
const csvFilePath='data.csv';

var studentdata = [];
var db = null;

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    
    //console.log(jsonObj);
    studentdata = jsonObj;
    //console.log(studentdata)

    var url = 'mongodb://localhost:27017';
    MongoClient.connect(url, function(error, client){
        //console.log("client",client)
        if(error){
            throw error;
        }
        db = client.db('eagle-payal-yadav')
        //console.log("db0", db)
        console.log("studentdata",studentdata)
        db.collection('users').insert(studentdata, function(err, res){
            if(err){
                throw err
            }
            console.log("inserted",res)
        })

    });
     
});


