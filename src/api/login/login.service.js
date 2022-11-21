const LoginModel = require('../../models');

const getLogin = function(){
    try{
        return LoginModel.find();
    }catch(e){
        return e;
    }
}

const saveLogin = function(req){
   try{
      var Login = new LoginModel(req.body)
      return LoginModel.save();
   }catch(e){
      return e;
   }
}

const putLogin = function(req){
    try{
        return LoginModel.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteLogin = function(req){
    try{
        return LoginModel.findByIdAndDelete(req.params.id)
    }catch(e){
        return e;
    }
}


module.exports = {
    getLogin,
    putLogin,
    saveLogin,
    deleteLogin
}
