$(document).ready(function(){
  $("form#favForm").submit(function(event){
    event.preventDefault();
    var favArray = [$("#inputOne").val(), $("#inputTwo").val(), $("#inputThree").val(), $("#inputFour").val()];
    $("ul li:nth-child(1)").text(favArray[1]);
    $("ul li:nth-child(2)").text(favArray[0]);
    $("ul li:nth-child(3)").text(favArray[2]);
  });

});
