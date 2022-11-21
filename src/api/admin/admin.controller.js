const service = require('../admin/admin.service');

const getAdmin = async function(req, res){
    try{
          var Admin = await service.getAdmin();
          res.status(200).send(Admin);
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const putAdmin = async function(req, res){
    try{
          await service.putAdmin(req);
          res.status(201).send('Data updated successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}
 
const saveAdmin = async function(req, res){
    try{
          await service.saveAdmin(req);
          res.status(200).send('Data saved successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const deleteAdmin = async function(req, res){
    try{
          var Admin = await service.deleteAdmin(req);
          res.status(200).send('Data deleted Successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAdmin,
    putAdmin,
    saveAdmin,
    deleteAdmin
}

