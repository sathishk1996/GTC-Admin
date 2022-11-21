const addUserModel = require('../../models/user');

const getAddUser = function(){
    try{
        return addUserModel.find();
    }catch(e){
        return e;
    }
}

const saveAddUser = function(req){
   try{
      var addUser = new addUserModel(req.body)
      return addUserModel.save();
   }catch(e){
      return e;
   }
}

const putAddUser = function(req){
    try{
        return addUserModel.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteAddUser = function(req){
    try{
        return addUserModel.findByIdAndDelete(req.params.id)
    }catch(e){
        return e;
    }
}


module.exports = {
    getAddUser,
    putAddUser,
    saveAddUser,
    deleteAddUser
}
