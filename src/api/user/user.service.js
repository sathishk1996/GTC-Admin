const UserModel = require('../../models/user');

const getUser = function(){
    try{
        return UserModel.find();
    }catch(e){
        return e;
    }
}

const saveUser = function(req){
   try{
      var User = new UserModel(req.body)
      return UserModel.save();
   }catch(e){
      return e;
   }
}

const putUser = function(req){
    try{
        return UserModel.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteUser = function(req){
    try{
        return UserModel.findByIdAndDelete(req.params.id)
    }catch(e){
        return e;
    }
}


module.exports = {
    getUser,
    putUser,
    saveUser,
    deleteUser
}
