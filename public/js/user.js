$(document).ready(function () {
    $("#logBtn").click(function () {
        location.href = "/login";
    })

    $("#preBtn").click(function () {
        location.href = "/vendor"
    })

    $("#nextBtn").click(function () {
        location.href = "/product"
    }) 
    
    $("#addBtn").click(function(){
        location.href = "/user/add"
    })

    $("#editBtn").click(function(){
        location.href = "/user/add"
    })

});      