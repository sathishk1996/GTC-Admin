const HomePageModel = require('../../models');

const getHomePage = function(){
    try{
        return HomePageModel.find();
    }catch(e){
        return e;
    }
}

const saveHomePage = function(req){
   try{
      var HomePage = new HomePageModel(req.body)
      return HomePageModel.save();
   }catch(e){
      return e;
   }
}

const putHomePage = function(req){
    try{
        return HomePageModel.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteHomePage = function(req){
    try{
        return HomePageModel.findByIdAndDelete(req.params.id)
    }catch(e){
        return e;
    }
}


module.exports = {
    getHomePage,
    putHomePage,
    saveHomePage,
    deleteHomePage
}
