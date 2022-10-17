$(document).ready(function(){
 var categoryList = [
    {vendor:'vendor 1', category:'Dress'},
    {vendor:'vendor 1', category:'Watch'},
    {vendor:'vendor 1', category:'Mobile'},
    {vendor:'vendor 2', category:'Toys'},
    {vendor:'vendor 2', category:'Shoes'},
    {vendor:'vendor 3', category:'HardWare'},
    {vendor:'vendor 3', category:'Laptop'},
    {vendor:'vendor 3', category:'Kitchen Kits'},
    {vendor:'vendor 4', category:'Earphone'},
    {vendor:'vendor 4', category:'Furniture'},
    {vendor:'vendor 5', category:'Playing Kit'},
    {vendor:'vendor 5', category:'Makeup Kit'},
 ];

  var subCategory = [
    {category:'Dress', subCategory:"Women's"},
    {category:'Dress', subCategory:"Kid's"},
    {category:'Dress', subCategory:"Men's"},
    {category:'Watch', subCategory:"Digital"},
    {category:'Watch', subCategory:"Analog"},
    {category:'Watch', subCategory:"wrist"},
    {category:'Watch', subCategory:"Wall Clock"},
    {category:'Mobile', subCategory:"Jio Keypad"},
    {category:'Mobile', subCategory:"Red Mi"},
    {category:'Mobile', subCategory:"Realmi"},
    {category:'Mobile', subCategory:"vivo"},
    {category:'Toys', subCategory:"Ball"},
    {category:'Toys', subCategory:"Barbi"},
    {category:'Shoes', subCategory:"Leather"},
    {category:'Shoes', subCategory:"Normal"},
    {category:'Shoes', subCategory:"Plastic"},
    {category:'HardWare', subCategory:"DrillMachine"},
    {category:'HardWare', subCategory:"screws"},
    {category:'Laptop', subCategory:"HP"},
    {category:'Laptop', subCategory:"Lenevo"},
    {category:'Laptop', subCategory:"Dell"},
    {category:'Kitchen Kits', subCategory:"Stand"},
    {category:'Kitchen Kits', subCategory:"Cups"},
    {category:'Earphone', subCategory:"Wired"},
    {category:'Earphone', subCategory:"Wireless"},
    {category:'Furniture', subCategory:"Dinning"},
    {category:'Furniture', subCategory:"Bed"},
    {category:'Furniture', subCategory:"Chair"},
    {category:'Playing Kit', subCategory:"Bat"},
    {category:'Playing Kit', subCategory:"carrom"},
    {category:'Playing Kit', subCategory:"chess"},
    {category:'Makeup Kit', subCategory:"Eyeliner"},
    {category:'Makeup Kit', subCategory:"Lipstick"},
    {category:'Makeup Kit', subCategory:"Face Cream"},
  ];

  $("#select1").change(function(){
    $("#select2").html("<option selected>Category</option>");
    $("#select2").html("<option selected>Sub-Category</option>");
    const cat = categoryList.filter(m=>m.vendor == $("#select1").val())
    cat.forEach(element => {
        const opt = "<option val='"+element.category+"'>"+element.category+"</option>";
        $("#select2").append(opt);
    });
  });

  $("#select2").change(function(){
    $("#select3").html("<option selected>Sub-Category</option>");
    const cat = subCategory.filter(m=>m.category == $("#select2").val())
    cat.forEach(element => {
        const opt = "<option val='"+element.subCategory+"'>"+element.subCategory+"</option>";
        $("#select3").append(opt);
    });
  });
});