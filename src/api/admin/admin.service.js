const AdminModel = require('../../models/admin');

const getAdmin = function(){
    try{
        return AdminModel.find();
    }catch(e){
        return e;
    }
}

const saveAdmin = function(req){
   try{
      var Admin = new AdminModel(req.body)
      return AdminModel.save();
   }catch(e){
      return e;
   }
}

const putAdmin = function(req){
    try{
        return AdminModel.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteAdmin = function(req){
    try{
        return AdminModel.findByIdAndDelete(req.params.id)
    }catch(e){
        return e;
    }
}


module.exports = {
    getAdmin,
    putAdmin,
    saveAdmin,
    deleteAdmin
}
