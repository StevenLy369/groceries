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
        $("#groceryList").append("<li>" + newList[0] + "</li>");
        $("#groceryList").append("<li>" + newList[1] + "</li>");
        $("#groceryList").append("<li>" + newList[2] + "</li>");
        $("#groceryList").append("<li>" + newList[3] + "</li>");
       



        



        $("#list").hide();
    })
   















})