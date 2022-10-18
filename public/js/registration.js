$(document).ready(function(){

   $("#aTag").click(function(){
      location.href ="/login";
   })

   $("#regform").submit(function(e){
       e.preventDefault();
    })

})