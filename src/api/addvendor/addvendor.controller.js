const service = require('../addvendor/addvendor.service');

const getAddVendor = async function(req, res){
    try{
          var addVendor = await service.getAddVendor();
          res.status(200).send(addVendor);
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const putAddVendor = async function(req, res){
    try{
          await service.putAddVendor(req);
          res.status(201).send('Data updated successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}
 
const saveAddVendor = async function(req, res){
    try{
          await service.saveAddVendor(req);
          res.status(200).send('Data saved successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const deleteAddVendor = async function(req, res){
    try{
          var addVendor = await service.deleteAddVendor(req);
          res.status(200).send('Data deleted Successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAddVendor,
    putAddVendor,
    saveAddVendor,
    deleteAddVendor
}

