const studentController = {}

const Model = require('./../models/logic.js');




studentController.retrieve = function(req, res){
    Model.retrieve(function(error, data){
        if(error){
            throw error
        }
        res.render('homepage',{
            data : data
        })
    })


}
studentController.delete = function(req, res){
    var id = req.params.id
    console.log("the id", id)
    Model.delete(id, function(error, success){
        if(error){
            throw error
        }
        res.send(success)

    })
}
studentController.add = function(req, res){
    var username = req.body.username;
    var name = req.body.name;
    var age = req.body.age;
    var city = req.body.city;
    Model.add(username, name, age, city, function(error, data){
        if(error){
        return res.send (error)
        }
        return res.send(data)


    })

}


module.exports = studentController