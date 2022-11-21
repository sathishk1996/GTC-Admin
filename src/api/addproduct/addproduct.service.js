const addProductModel = require('../../models/product');

const getAddProduct = function(){
    try{
        return addProductModel.find();
    }catch(e){
        return e;
    }
}

const saveAddProduct = function(req){
   try{
      var addProduct = new addProductModel(req.body)
      return addProductModel.save();
   }catch(e){
      return e;
   }
}

const putAddProduct = function(req){
    try{
        return addProductModel.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteAddProduct = function(req){
    try{
        return addProductModel.findByIdAndDelete(req.params.id)
    }catch(e){
        return e;
    }
}


module.exports = {
    getAddProduct,
    putAddProduct,
    saveAddProduct,
    deleteAddProduct
}
