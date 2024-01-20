

const bloque = $('.bloque:first');
const botones = $('.aBk');

    //  id="c1">Ocultar bloque
    $('#c1').click(
        function(){
            bloque.hide(500);
        })

    //  id="c2">Mostrar bloque
    $('#c2').click(
        function(){
            bloque.show(500);;
        })

    //  id="c1b">Ocultar / Mostrar
    $('#c1b').click(
        function(){
            bloque.toggle(500);
        })

    //  id="c3">Cambiar tamañoss
    $('#c3').click(
        function(){
            bloque.css('font-size','2em').css('width','30%');
        })

    //  id="c4">Ocultar con FadeOut
    $('#c4').click(function(){
        bloque.fadeOut(500);
    });

    //  id="c5">Mostrar con FadeIn
    $('#c5').click(function(){
        bloque.fadeIn(500);
    });
    
    //  id="c6">Mover rivo
    // $('#c6').click(function(){
        
    //     bloque.animate({
    //         left: "+=100",
    //         }, 1000, 
    //     function() {
    //         bloque.animate({
    //             down: "+=100",
    //         }, 600, function() {

    //             });

            
    //     });

    // });
    //tornike
    $('#c6').click(function(){
        bloque.animate(
            {down: "+=300px"},400
        )

    })
    
    //  id="c7">Cambiar estilo CSS
    $('#c7').click(function(){
        bloque.css('background-color','black');
    });