$(document).ready(function() {
    //MouseOver and MouseOut.
    var box = $('#box');
    box.mouseover(function(){
        $(this).css("background","red")
    });

    box.mouseout(function(){
        $(this).css("background","green")
    });
});