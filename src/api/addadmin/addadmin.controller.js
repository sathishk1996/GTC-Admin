const service = require('../addadmin/addadmin.service');

const getAddAdmin = async function(req, res){
    try{
          var addAdmin = await service.getAddAdmin();
          res.status(200).send(addAdmin);
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const putAddAdmin = async function(req, res){
    try{
          await service.putAddAdmin(req);
          res.status(201).send('Data updated successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const saveAddAdmin = async function(req, res){
    try{
          await service.saveAddAdmin(req);
          res.status(200).send('Data saved successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const deleteAddAdmin = async function(req, res){
    try{
          var addAdmin = await service.deleteAddAdmin(req);
          res.status(200).send('Data deleted Successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAddAdmin,
    putAddAdmin,
    saveAddAdmin,
    deleteAddAdmin
}

