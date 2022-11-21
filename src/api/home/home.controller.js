const service = require('../home/home.service');

const getHome = async function(req, res){
    try{
          var Home = await service.getHome();
          res.status(200).send(Home);
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const putHome = async function(req, res){
    try{
          await service.putHome(req);
          res.status(201).send('Data updated successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}
 
const saveHome = async function(req, res){
    try{
          await service.saveHome(req);
          res.status(200).send('Data saved successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const deleteHome = async function(req, res){
    try{
          var Home = await service.deleteHome(req);
          res.status(200).send('Data deleted Successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getHome,
    putHome,
    saveHome,
    deleteHome
}

