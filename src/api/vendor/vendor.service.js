const VendorModel = require('../../models/vendor');

const getVendor = function(){
    try{
        return VendorModel.find();
    }catch(e){
        return e;
    }
}

const saveVendor = function(req){
   try{
      var Vendor = new VendorModel(req.body)
      return VendorModel.save();
   }catch(e){
      return e;
   }
}

const putVendor = function(req){
    try{
        return VendorModel.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteVendor = function(req){
    try{
        return VendorModel.findByIdAndDelete(req.params.id)
    }catch(e){
        return e;
    }
}


module.exports = {
    getVendor,
    putVendor,
    saveVendor,
    deleteVendor
}
