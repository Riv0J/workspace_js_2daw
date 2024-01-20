$(document).ready(function(){
    
    /*selectores:
    $(".clase").
    $("#id")
    */


    //ejecutamos aqui todo una vez cargado el dom
    
    $(".letraGrande").css("font-size","1.5em").css("color","red");
    $("#aColor").css("color","blue");
    console.log($("#aColor").text());
    $("#aColor").html("<h2>nuevo texto</h2>");
    $("#aColor h2").text("holii");

})