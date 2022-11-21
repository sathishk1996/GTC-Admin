const addAdminModel = require('../../models/admin');

const getAddAdmin = function(){
    try{
        return addAdminModel.find();
    }catch(e){
        return e;
    }
}

const saveAddAdmin = function(req){
   try{
      var addAdmin = new addAdminModel(req.body)
      return addAdminModel.save();
   }catch(e){
      return e;
   }
}

const putAddAdmin = function(req){
    try{
        return addAdminModel.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteAddAdmin = function(req){
    try{
        return addAdminModel.findByIdAndDelete(req.params.id)
    }catch(e){
        return e;
    }
}


module.exports = {
    getAddAdmin,
    putAddAdmin,
    saveAddAdmin,
    deleteAddAdmin
}
