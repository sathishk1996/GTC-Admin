$(document).ready(function(){
    $("#loginBtn").click(function(){
       var name = $("#name").val();
       var psw = $("psw").val();
       if(!name && !psw ){
        alert("Please Enter Valid Inputs");
        return;
       } else {
          location.href = "/home";
       }
    })
});