const service = require('../adduser/adduser.service');

const getAddUser = async function(req, res){
    try{
          var addUser = await service.getAddUser();
          res.status(200).send(addUser);
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const putAddUser = async function(req, res){
    try{
          await service.putAddUser(req);
          res.status(201).send('Data updated successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}
 
const saveAddUser = async function(req, res){
    try{
          await service.saveAddUser(req);
          res.status(200).send('Data saved successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const deleteAddUser = async function(req, res){
    try{
          var addUser = await service.deleteAddUser(req);
          res.status(200).send('Data deleted Successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getAddUser,
    putAddUser,
    saveAddUser,
    deleteAddUser
}

