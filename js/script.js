$(document).ready(function(){

   



    $("#list").submit(function(event) {

        event.preventDefault();



        var listArrays = [($("input#one").val()) , ($("input#two").val()) , ($("input#three").val()) , ($("input#four").val()) ]
        listArrays.sort();
        


        $("#list").hide();

        var newList = listArrays.map(function(listArray){
            return listArray.toUpperCase()

        })
        console.log(newList);
        
       



        



        $("#list").hide();
    })
   















})