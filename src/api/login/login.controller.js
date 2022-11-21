const service = require('../login/login.service');

const getLogin = async function(req, res){
    try{
          var Login = await service.getLogin();
          res.status(200).send(Login);
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const putLogin = async function(req, res){
    try{
          await service.putLogin(req);
          res.status(201).send('Data updated successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}
 
const saveLogin = async function(req, res){
    try{
          await service.saveLogin(req);
          res.status(200).send('Data saved successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const deleteLogin = async function(req, res){
    try{
          var Login = await service.deleteLogin(req);
          res.status(200).send('Data deleted Successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getLogin,
    putLogin,
    saveLogin,
    deleteLogin
}

