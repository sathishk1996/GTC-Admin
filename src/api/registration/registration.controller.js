const service = require('../registration/registration.service');

const getReg = async function(req, res){
    try{
          var Reg = await service.getReg();
          res.status(200).send(Reg);
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const putReg = async function(req, res){
    try{
          await service.putReg(req);
          res.status(201).send('Data updated successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}
 
const saveReg = async function(req, res){
    try{
          await service.saveReg(req);
          res.status(200).send('Data saved successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const deleteReg = async function(req, res){
    try{
          var Reg = await service.deleteReg(req);
          res.status(200).send('Data deleted Successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getReg,
    putReg,
    saveReg,
    deleteReg
}

