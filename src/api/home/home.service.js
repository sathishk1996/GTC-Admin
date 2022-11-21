const HomeModel = require('../../models');

const getHome = function(){
    try{
        return HomeModel.find();
    }catch(e){
        return e;
    }
}

const saveHome = function(req){
   try{
      var Home = new HomeModel(req.body)
      return HomeModel.save();
   }catch(e){
      return e;
   }
}

const putHome = function(req){
    try{
        return HomeModel.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteHome = function(req){
    try{
        return HomeModel.findByIdAndDelete(req.params.id)
    }catch(e){
        return e;
    }
}


module.exports = {
    getHome,
    putHome,
    saveHome,
    deleteHome
}
