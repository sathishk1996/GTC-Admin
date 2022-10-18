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

    $("#regBtn").click(function(){
      location.href = "/reg";
    })

    $("#fpBtn").click(function(){
      location.href = "/forgotpassword";
    })

    $("#formsub").submit(function(e){
      e.preventDefault();
  })

});