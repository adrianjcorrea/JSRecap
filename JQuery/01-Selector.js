//Function to check jquery lib is being ablilitated correrctly.

//$(document).ready(function(){
  //console.log("JQuery CDN script working")
//});

$(document).ready(function(){
  //ID selectors.
  $("#red").css("background", "red").css("color", "white");
  $("#blue").css("background", "blue");
  $("#black").css( "background", "black").css("color", "white");

  //CLASS Selectors
  var myClass = $(".zebra");
  //myClass.css("border", "2.5px dashed black");

  $(".noBorder").click(function(){
    $(this).addClass('zebra');
  });
});
