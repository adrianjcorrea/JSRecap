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
    box.hover(changeRed,changeGreen);

    //Click & DoubleClick.
    box.click(function() {
        $(this).css("background","blue").css("color","white")
    });

    box.dblclick(function() {
        $(this).css("background","purple").css("color","black")
    });
    
    //Blur and onFocus
    var name = $("#name");
    name.focus(function(){
        $(this).css("border", "5px solid green");
    });
     
    name.blur(function(){
        $(this).css("border", "1px solid #ccc");
        var valor = $(this).val();
        $("#datos").text(valor).show();
    });
    


});