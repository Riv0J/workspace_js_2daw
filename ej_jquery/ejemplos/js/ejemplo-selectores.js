$(document).ready(function(){
        /*selectores:
        $(".clase").
        $("#id")
        */
    
    //  a. Asigna la clase borde a REUNIONES y PLANNING.
    $('p:contains(REUNIONES), p:contains(PLANNING)').addClass('borde');

    // b. Asigna la clase verde a los días de la semana.
    $('ul>li').has('ul').addClass('verde');

    // c. Borra la clase borde.
    $('p:contains(REUNIONES), p:contains(PLANNING)').removeClass('borde');

    // d. La clase borde se debe asignar o quitar según hagamos click sobre reuniones o planning.
    $('p:contains(REUNIONES), p:contains(PLANNING)').removeClass('borde').click(
        function(){
            if($(this).hasClass('borde')){
                $(this).removeClass('borde');
            }else{
                $(this).addClass('borde');
            }
        }
    )

    // e. Modifica ‘reuniones’ por ‘Reuniones importantes’.
    $('p:contains(REUNIONES)').text('REUNIONES IMPORTANTES');

    // f. Modifica ‘Planning’ por ‘Planing semanal'.
    $('p:contains(REUNIONES)').text('PLANING SEMANAL');
    // g. Elimina los elementos de la las listas que estén vacíos.
    $('li:empty').remove();
    
    // h. Añade una reunión a las 11:00 que diga "Café descanso".
    $('ul:first li:first').append('<li>11:00 Cafe descanso</li>');//Aparece dentro de lo seleccionado pero al final

    // i. Añade a las "08:00 Entrar a trabajar"  al principio de la lista de reuniones. 
    $('ul:first').prepend('<li>8:00 Entrar a trabajar</li>'); //es como append pero al principio del todo
    
    // j. Añade  detrás de 'testeo' otra tarea que sea 'subir a producción'.
    $("ul>li>ul:contains('Testeo')").append('<li>subir a produccion</li>');

    // k. En la lista de planning, añade al final de cada día  la cantidad de horas
    // semanales que tienen cuando se haga click sobre ellos. 
    //Parte del nombre de cada módulo y añade la información desde ul.

    //esto toma el 2do li, luego el li dentro de el y luego el ul dentro de ellos
    $('ul:nth-of-type(2n)>li>ul').click(
        function(){
            //el this es el elemento seleccionado (ul)
            alert('Horas:'+ $(this).attr('data-hours'));
        }
    );
    
    // l. Vacía la lista que contiene 'Viernes'.
    $('li:contains(Viernes>ul').empty();

    // m. Elimina la lista que contiene las reuniones.
    $("ul:nth-of-type(1n)").empty();

    })
