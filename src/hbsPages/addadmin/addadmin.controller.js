const service = require('../../api/addadmin/addadmin.service');

const getAddAdmin = async function(req, res){
       await service.getAddAdmin();
       res.render('addAdmin',{
       });
}

const addAdmin = async function(req, res){
    var id_result = await userService.getAddAdmin();
    res.render('addAdmin', {
        title: "Add Admin",
    });
}

const editAddAdmin = function(req, res){
    res.render('addAdmin', {
        title: "Edit Admin"
    });
}

module.exports = {
    getTask,
    addTask,
    editTask
}