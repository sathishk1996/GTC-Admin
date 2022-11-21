const ProductModel = require('../../models/product');

const getProduct = function(){
    try{
        return ProductModel.find();
    }catch(e){
        return e;
    }
}

const saveProduct = function(req){
   try{
      var Product = new ProductModel(req.body)
      return ProductModel.save();
   }catch(e){
      return e;
   }
}

const putProduct = function(req){
    try{
        return ProductModel.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteProduct = function(req){
    try{
        return ProductModel.findByIdAndDelete(req.params.id)
    }catch(e){
        return e;
    }
}


module.exports = {
    getProduct,
    putProduct,
    saveProduct,
    deleteProduct
}
