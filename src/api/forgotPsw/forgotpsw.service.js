const ForgotPwdModel = require('../../models');

const getForgotPwd = function(){
    try{
        return ForgotPwdModel.find();
    }catch(e){
        return e;
    }
}

const saveForgotPwd = function(req){
   try{
      var ForgotPwd = new ForgotPwdModel(req.body)
      return ForgotPwdModel.save();
   }catch(e){
      return e;
   }
}

const putForgotPwd = function(req){
    try{
        return ForgotPwdModel.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteForgotPwd = function(req){
    try{
        return ForgotPwdModel.findByIdAndDelete(req.params.id)
    }catch(e){
        return e;
    }
}


module.exports = {
    getForgotPwd,
    putForgotPwd,
    saveForgotPwd,
    deleteForgotPwd
}
