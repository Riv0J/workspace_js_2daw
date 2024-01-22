const colores = [];
const deseos = {};
let id_counter = 0;
let cumplidos_counter = 0;

const container_deseos = $('div:last');

const counter_deseos = $('span:first');
const counter_cumplidos = $('span:last');

const button_cargar = $('button:first');
const button_crear = $('button:last');

$(document).ready(function() {
    container_deseos.css("display","flex").css("flex-direction","row");
    container_deseos.css("gap","1rem").css("transition","all 2s");

    //asignar functions a lso bvutttons
    button_cargar.click(cargar_deseos);
    button_crear.hide()
    button_crear.click(crear_deseo);
});

async function cargar_deseos(){
    //eliminar button_cargar
    button_cargar.remove();

    //mostrar button_crear
    button_crear.show();

    //fetch al json
    await fetch("./data/deseos.json").then((response)=>{
        return response.json(); //recogemos la info
    })
    .then((response_data)=>{
        response_data.forEach(deseo => {
            if(colores.includes(deseo.color) == false){
                colores.push(deseo.color);
            }

            //crear un nuevo objeto deseo
            const nuevo_deseo = {
                color : deseo.color,
                texto : deseo.texto,
                id : id_counter,
            }

            //meter el deseo en el array
            deseos[id_counter] = nuevo_deseo;

            //incrementar el id counter
            id_counter++

            //dibujar el deseo en pantalla
            dibujar_deseo(nuevo_deseo);

            
        });
        
        actualizar_contadores();
    })
    .catch((err) =>{
        console.log("Fetching Error");
        console.log(err);
    });
}
function dibujar_deseo(deseo){
    //crear el button
    const button_deseo = $('<button></button>').text(deseo.texto).appendTo(container_deseos);

    //asignarle id al button
    button_deseo.attr("id", deseo.id);

    //onclick
    button_deseo.click(function(){
        confetti(); //yay confetti
        eliminar_deseo(deseo.id);
    })

    //estilos css
    button_deseo.css("cursor","pointer").css("font-size","2rem");
    button_deseo.css("background-color",deseo.color).css("color","white").css("min-width","10rem").css("padding","1rem");
    return button_deseo;
}

async function crear_deseo(){
    //obtener el texto del deseo, con la libreria de modal
    const texto_deseo = await show_prompt();
    if(!texto_deseo){ return; }

    //crear el objeto deseo
    const nuevo_deseo =  {
        texto: texto_deseo,
        color: getRandomColor(),
        id: id_counter,
    }

    //agregarlo en la coleccion de deseos
    deseos[id_counter] = nuevo_deseo;

    //dibujar en el DOM
    const button_deseo = dibujar_deseo(nuevo_deseo);

    //transicion boni de jquery
    button_deseo.hide();
    button_deseo.slideToggle();

    actualizar_contadores();
}

function eliminar_deseo(deseo_id){
    const deseo_eliminar = $('#'+deseo_id);
    //transicion boni de jquery
    deseo_eliminar.fadeOut();

    //eliminarlo del DOM luego de 1s
    setTimeout(() => {
        deseo_eliminar.remove();
    }, "1000");
    
    //quitar el deseo de coleccion de deseos
    delete deseos[deseo_id];

    cumplidos_counter++;
    actualizar_contadores()
}

//actualizar el counter deseos con la cantidad de llaves que hay en el diccionario
function actualizar_contadores(){
    counter_deseos.text(Object.keys(deseos).length);
    counter_cumplidos.text(cumplidos_counter);
}

async function show_prompt(){
    const inputValue = "Nuevo deseo";
    const { value: text } = await Swal.fire({
        title: "Nuevo deseo",
        input: "text",
        inputLabel: "Escribe un deseo",
        inputValue,
        showCancelButton: true,
        confirmButtonColor: getRandomColor(),
        cancelButtonColor: "#d33",
        confirmButtonText: "Crear el deseo",
        cancelButtonText: "Cancelar"
    });
    if (text) {
        Swal.fire({ 
            confirmButtonColor: getRandomColor(),
            title: "¡Se ha creado tu deseo!",
            html: text, 
        });
      return text;
    }
}

function getRandomColor(){
    return colores[Math.floor(Math.random() * colores.length)];
}
