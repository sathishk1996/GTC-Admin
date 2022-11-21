const service = require('../addProduct/addProduct.service');

const getAddProduct = async function(req, res){
    try{
          var addProduct = await service.getAddProduct();
          res.status(200).send(addProduct);
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const putAddProduct = async function(req, res){
    try{
          await service.putAddProduct(req);
          res.status(201).send('Data updated successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}
 
const saveAddProduct = async function(req, res){
    try{
          await service.saveAddProduct(req);
          res.status(200).send('Data saved successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const deleteAddProduct = async function(req, res){
    try{
          var addProduct = await service.deleteAddProduct(req);
          res.status(200).send('Data deleted Successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAddProduct,
    putAddProduct,
    saveAddProduct,
    deleteAddProduct
}

