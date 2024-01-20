const lineas_de_pedido = [];

const input_comprar = $("[value=comprar]");
const input_cantidad = $('[name="cantidad"]');
const input_imprimir = $('[value="imprimir"]');

const select_producto = $('#producto');
const text_area_factura = $('textarea');

function comprar(){
    //obtener le producto select
    const clave = select_producto.val();

    //si la clave es el valor default 0 entonces no hacer na
    if (clave == "0"){ alert("Selecciona un producto primero"); return; }

    //nombre del producto selected
    const selected = select_producto.find(':selected');
    const nombre_producto = selected.text();

    //obtener precio del string
    const precio = getPrecio(nombre_producto);

    //obtener cantidad
    const cantidad = input_cantidad.val();

    //escribir en el text_area_factura
    text_area_factura.text(text_area_factura.text() + '\n '+ nombre_producto+' x '+cantidad+' ud');

    lineas_de_pedido.push(
        {   
            clave: clave,
            nombre: nombre_producto,
            precio: precio,
            cantidad: cantidad
        }
    );

}

function imprimir(){
    let total = 0;

    lineas_de_pedido.forEach(linea => {
        const sub_total = parseFloat(linea.precio) * parseFloat(linea.cantidad);
        total += sub_total;
    });

    text_area_factura.text(text_area_factura.text() + '\n \n IMPORTE TOTAL: '+total+'€');
    descargarFactura();
}

function getPrecio(inputString) {
    inputString = inputString.trim();
    let precio = "";
    let indice = 2;

    //encontrar el indice donde hay un euro
    while (inputString.length > indice) {
        const ultimo_caracter = inputString[inputString.length - indice];

        // Chequea si el último carácter es un número
        if (!isNaN(ultimo_caracter)) {
            //tiene que ser al reves
            precio = ultimo_caracter + precio;
            indice++;
        } else {
            return precio;
        }
    }
}

function descargarFactura(){
    window.jsPDF = window.jspdf.jsPDF;

    const doc = new jsPDF();
    doc.text(text_area_factura.text(), 10, 10);
    doc.save("factura.pdf");
}

$(document).ready(function () {
    input_comprar.on("click", comprar);
    input_imprimir.on("click", imprimir);
});