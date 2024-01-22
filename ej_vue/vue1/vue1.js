const app = new Vue({
    el: '#app',
    data: {
      message: 'Nuestros viajes',
      titulo:'',
      post:'',
      titulo1:'destino 1',
      post1: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat corrupti qui ducimus ipsum aliquam. Tenetur, laborum vero, eaque veritatis ex iusto voluptatum doloremque dolorem quis nihil itaque dolore aliquam illo.',
      titulo2: 'destino 2',
      post2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat corrupti qui ducimus ipsum aliquam. Tenetur, laborum vero, eaque veritatis ex iusto voluptatum doloremque dolorem quis nihil itaque dolore aliquam illo.',
      titulo3: 'destino 3',
      post3: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat corrupti qui ducimus ipsum aliquam. Tenetur, laborum vero, eaque veritatis ex iusto voluptatum doloremque dolorem quis nihil itaque dolore aliquam illo.'
    }
  });

  const app2 = new Vue({
    el: '#app2',
    data: {
      message: 'Próximos viajes',
      info1:'01/01/2024 destino1',
      info2:'01/03/2024 destino2',
      info3:'01/02/2024 destino1'
    }
  });

  const app3 = new Vue({
    el: '#app3',
    data: {
      message: 'Objeto Vue con el ciclo de vida'
    },
    beforeCreate() { /*no podemos acceder todavía la DOM*/ 
      console.log("ESTADO: beforeCreate");
    },
    created() { /**aqui verificamos si el objeto/componente tiene plantilla asociada; si tienes se compila y se observan las propiedades computadas, data, métodos y los eventos. Pero todavía no podemos acceder a "$el" */
      console.log("ESTADO: created");
    },
    beforeMount() { /**este estado es antes de representar el componente */
      console.log("ESTADO: beforeMount");
    },
    mounted() { /* el componente está cargado, está incluido e el DOM y podemos acceder ya a "$el"*/ 
      console.log("ESTADO: mounted");
    },
    beforeUpdate() { /*estado si el valor del data cambia*/
      console.log("ESTADO: beforeUpdate");
    },
    updated() { /*evento al finalizar la modificación del valor*/ 
      console.log("ESTADO: update");
    },
    beforeDestroy() { /*eliminamos eventos que estuvieran activos en el componente antes de eliminar la instancia*/
      console.log("ESTADO: beforeDestroy");
    },
    destroyed() { /**se lanza al desacoplar el componente */
      console.log("ESTADO: destroyed");
    },
    methods: {
      destruir:function(){
        app3.$destroy();//destruir el objeto app llamando al destructor por defecto
      }
    }
  });
