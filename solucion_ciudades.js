const listaProvincias = document.getElementById('provincias');
const listaCiudades = document.getElementById('ciudades');
let ciudadesData = []; // Variable global para almacenar los datos de ciudades

const getCiudades = () => {
  console.log("dentro de getCiudades");
  fetch('ciudades.json')
    .then((response) => {
      return response.json();
    })
    .then((ciudades) => {
      ciudadesData = ciudades; // Almacenamos los datos en la variable global

      const provs = [];
      ciudades.map((ciudad) => {
        const val = Number(ciudad.CP);
        if (!provs.includes(val)) {
          provs.push(val);
          const optionProvincia = document.createElement('option');
          optionProvincia.setAttribute('value', val);
          const nombreProvincia = document.createTextNode(ciudad.Provincia);
          optionProvincia.appendChild(nombreProvincia);
          listaProvincias.appendChild(optionProvincia);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const cargarCiudades = () => {
  const selectedProvinceId = listaProvincias.value;
  listaCiudades.innerHTML = '';

  ciudadesData.map((ciudad) => { // Utilizamos los datos almacenados en ciudadesData
    const val = Number(ciudad.CP);
    if (val == selectedProvinceId) {
      const optionCiudad = document.createElement('option');
      const nombreCiudad = document.createTextNode(ciudad.Municipio);
      optionCiudad.appendChild(nombreCiudad);
      listaCiudades.appendChild(optionCiudad);
    }
  });

  listaCiudades.removeAttribute('disabled');
};

getCiudades();

