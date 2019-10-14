$(document).ready(function() {
    //MOUSEOVER AND MOUSEOUT.
    var box = $('#box');
    // box.mouseover(function(){
    //     $(this).css("background","red")
    // });

    // box.mouseout(function(){
    //     $(this).css("background","green")
    // });
    
    function changeRed() {
        $(this).css("background","red");
    }

    function changeGreen() {
        $(this).css("background", "green");
    }
    //HOVER EFFECT
    box.hover(changeRed,changeGreen)
});