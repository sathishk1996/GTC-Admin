const service = require('../forgotPsw/forgotpsw.service');

const getForgotPwd = async function(req, res){
    try{
          var ForgotPwd = await service.getForgotPwd();
          res.status(200).send(ForgotPwd);
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const putForgotPwd = async function(req, res){
    try{
          await service.putForgotPwd(req);
          res.status(201).send('Data updated successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}
 
const saveForgotPwd = async function(req, res){
    try{
          await service.saveForgotPwd(req);
          res.status(200).send('Data saved successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const deleteForgotPwd = async function(req, res){
    try{
          var ForgotPwd = await service.deleteForgotPwd(req);
          res.status(200).send('Data deleted Successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getForgotPwd,
    putForgotPwd,
    saveForgotPwd,
    deleteForgotPwd
}

