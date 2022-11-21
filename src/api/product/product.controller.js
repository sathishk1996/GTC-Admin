const service = require('../product/product.service');

const getProduct = async function(req, res){
    try{
          var Product = await service.getProduct();
          res.status(200).send(Product);
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const putProduct = async function(req, res){
    try{
          await service.putProduct(req);
          res.status(201).send('Data updated successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}
 
const saveProduct = async function(req, res){
    try{
          await service.saveProduct(req);
          res.status(200).send('Data saved successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const deleteProduct = async function(req, res){
    try{
          var Product = await service.deleteProduct(req);
          res.status(200).send('Data deleted Successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getProduct,
    putProduct,
    saveProduct,
    deleteProduct
}

