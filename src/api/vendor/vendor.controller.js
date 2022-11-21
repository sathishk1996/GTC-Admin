const service = require('../vendor/vendor.service');

const getVendor = async function(req, res){
    try{
          var Vendor = await service.getVendor();
          res.status(200).send(Vendor);
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const putVendor = async function(req, res){
    try{
          await service.putVendor(req);
          res.status(201).send('Data updated successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}
 
const saveVendor = async function(req, res){
    try{
          await service.saveVendor(req);
          res.status(200).send('Data saved successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const deleteVendor = async function(req, res){
    try{
          var Vendor = await service.deleteVendor(req);
          res.status(200).send('Data deleted Successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getVendor,
    putVendor,
    saveVendor,
    deleteVendor
}

