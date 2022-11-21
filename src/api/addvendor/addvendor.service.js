const addVendorModel = require('../../models/vendor');

const getAddVendor = function(){
    try{
        return addVendorModel.find();
    }catch(e){
        return e;
    }
}

const saveAddVendor = function(req){
   try{
      var addVendor = new addVendorModel(req.body)
      return addVendorModel.save();
   }catch(e){
      return e;
   }
}

const putAddVendor = function(req){
    try{
        return addVendorModel.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteAddVendor = function(req){
    try{
        return addVendorModel.findByIdAndDelete(req.params.id)
    }catch(e){
        return e;
    }
}


module.exports = {
    getAddVendor,
    putAddVendor,
    saveAddVendor,
    deleteAddVendor
}
