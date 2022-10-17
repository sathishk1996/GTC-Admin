$(document).ready(function(){
   
      $("#addBtn").click(function(){
           $("#div").append(`<div><input type="text" id="input">
           <button id="deleteBtn">x</button></div>
           <br><br>`)
       })
   
       $("#div").on('click', '#deleteBtn', function (event) {
          $(this).parent("div").remove();
       });
       
   });