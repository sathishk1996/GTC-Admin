const service = require('../user/user.service');

const getUser = async function(req, res){
    try{
          var User = await service.getUser();
          res.status(200).send(User);
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const putUser = async function(req, res){
    try{
          await service.putUser(req);
          res.status(201).send('Data updated successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}
 
const saveUser = async function(req, res){
    try{
          await service.saveUser(req);
          res.status(200).send('Data saved successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const deleteUser = async function(req, res){
    try{
          var User = await service.deleteUser(req);
          res.status(200).send('Data deleted Successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getUser,
    putUser,
    saveUser,
    deleteUser
}

