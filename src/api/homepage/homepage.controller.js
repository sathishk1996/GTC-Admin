const service = require('../homepage/homepage.service');

const getHomePage = async function(req, res){
    try{
          var HomePage = await service.getHomePage();
          res.status(200).send(HomePage);
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const putHomePage = async function(req, res){
    try{
          await service.putHomePage(req);
          res.status(201).send('Data updated successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}
 
const saveHomePage = async function(req, res){
    try{
          await service.saveHomePage(req);
          res.status(200).send('Data saved successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

const deleteHomePage = async function(req, res){
    try{
          var HomePage = await service.deleteHomePage(req);
          res.status(200).send('Data deleted Successfully');
    }catch(e){
         res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    getHomePage,
    putHomePage,
    saveHomePage,
    deleteHomePage
}

