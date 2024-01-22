
axios.get('ciudades.json')
  .then(function (response) {
    let listaProvincias = [];
    // manejar respuesta exitosa
    response.data.forEach(element => {

        if(!listaProvincias.includes(element.Provincia)){
        listaProvincias.push(element.Provincia);

        let opcion = document.createElement("option");
        opcion.text = element.Provincia;
        document.getElementById("provincias").add(opcion);
        }
    });
})
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });

function renderCiudades(){
    const provinciaBuscada = document.getElementById("provincias").value;
    
    let  resultados =  document.getElementById("ciudades");

    while (resultados.firstChild) {
        resultados.removeChild(resultados.firstChild);
    }

    axios.get('ciudades.json')
  .then(function (response) {
    let listaCiudades = [];
    // manejar respuesta exitosa
    response.data.forEach(element => {
    if(provinciaBuscada === element.Provincia){
        if(!listaCiudades.includes(element.Municipio)){
            listaCiudades.push(element.Municipio);

        let opcion = document.createElement("option");
        opcion.text = element.Municipio;
        document.getElementById("ciudades").add(opcion);
        }
    }
    resultados.disabled = false;
    });
})
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });
}