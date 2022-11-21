const RegModel = require('../../models');

const getReg = function(){
    try{
        return RegModel.find();
    }catch(e){
        return e;
    }
}

const saveReg = function(req){
   try{
      var Reg = new RegModel(req.body)
      return RegModel.save();
   }catch(e){
      return e;
   }
}

const putReg = function(req){
    try{
        return RegModel.findByIdAndUpdate(req.params.id, req.body);
    }catch(e){
        return e;
    }
}

const deleteReg = function(req){
    try{
        return RegModel.findByIdAndDelete(req.params.id)
    }catch(e){
        return e;
    }
}


module.exports = {
    getReg,
    putReg,
    saveReg,
    deleteReg
}
