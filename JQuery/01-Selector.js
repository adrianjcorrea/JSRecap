//Function to check jquery lib is being ablilitated correrctly.

//$(document).ready(function(){
  //console.log("JQuery CDN script working")
//});

$(document).ready(function(){
  //ID selectors.
  $('#red').css('background', 'red').css('color', 'white');
  $('#blue').css('background', 'blue');
  $('#black').css('background', 'black').css('color', 'white');

  //CLASS Selectors
  var myClass = $('.zebra');
  //myClass.css("border", "2.5px dashed black");

  // $(".noBorder").click(function(){
  //   $(this).addClass('zebra');      
  // });

  var paragraph = $('p').css('cursor', 'pointer');

  paragraph.click(function(){
  var that = $(this);
  
  if(!that.hasClass('zebra')){
    that.addClass('zebra');      

  } else if(!that.hasClass('grande')){
    that.addClass('grande');

  } else if (that.hasClass('grande') && that.hasClass('zebra')){
    that.removeClass('zebra');
    that.removeClass('grande')

  } 
  });

  //Selecting by attribute
  $('[title="Facebook"]').css('background', '#ccc');
  $('[title="Youtube"]').css('background', '#ADD8E6');

  //Other selectors

  //$('p, a').addClass('superior-margin');
  var search = $("#caja").eq(0).parent().parent().parent().find('.underLine');
  console.log(search);
});
