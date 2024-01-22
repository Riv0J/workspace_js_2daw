const app = new Vue({
    el: '#app',
    data: {
        html:`
            <div>
                <h2> RENDER DESDE VUE </h2><br>
                <p> contiene el enlace a <a href="centrosanluis.com">Centro San Luis</a> <p>
            <div/>
            `
    }
})
const app_bind2 = new Vue({
    el: '#app_bind',
    data: {
        imagen1: "https://via.placeholder.com/320x320.png",
        imagen2: "https://via.placeholder.com/320x320.png",
        imagen3: "https://via.placeholder.com/320x320.png",
        indexNeg: 0,
        index:100,
        indexSup: 200
    },
    methods:{
        startLoop(){
            setInterval(this.cambiarImagen1, 150);
            setInterval(this.cambiarImagen2, 100);
            setInterval(this.cambiarImagen3, 250);
        },
        cambiarImagen1(){
            this.imagen1 = `https://loremflickr.com/320/240?random${this.indexNeg++}`;
        },
        cambiarImagen2(){
            this.imagen2 = `https://loremflickr.com/320/240?random${this.index++}`;
        },
        cambiarImagen3(){
            this.imagen3 = `https://loremflickr.com/320/240?random${this.indexSup++}`;
        },
    }
})
const app3 = new Vue({
    el: '#app3',
    data: {
        mascota: '',
        imagen: '',
    },
    methods:{
        elegirMascota: function(){
            if(this.mascota == "Perro"){
                this.mascota = "dog";
            }
            if(this.mascota == "Gato"){
                this.mascota = "cat";
            }
            this.imagen = `https://loremflickr.com/320/240/${this.mascota}`
        }
    }
})
const app4 = new Vue({
    el: '#app4',
    data: {
      newProduct: '',
      shoppingList: ['manzanas', 'leche', 'hamburguesa', 'patatas fritas'],
    },
    methods: {
      onEnterPressed: function() {
        this.shoppingList.push(this.newProduct);
        this.newProduct = '';
      }
    }
  });
  
  const app5 = new Vue({
    el: '#app5',
    data: {
      post: {
        title: 'Nuevo artículo',
        date: '04/01/2023',
        author: 'Yo misma',
        content: 'Este es el contenido'
      },
    }
  });
  /**Filtros: modificadores de valor */
  Vue.filter('productName', function(value){
    if(!value) return ''
    value = value.toString();
    return value.toUpperCase();
  });
  
  const app6 = new Vue({
    el: '#app6',
    data: {
      shoppingList: ['apple', 'orange', 'banana', 'grapes'],
    },
    methods: {
    }
  });
  
  const app7 = new Vue({
    el: '#app7',
    data: {
      message: 'Solo una vez',
    },
    methods: {
    }
  });
  
  
  const app8 = new Vue({
    el: '#app8',
    data: {
      mouseX:'0',
      mouseY:'0'
    },
    methods: {
      move:function(event){
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      }
    }
  });
  

  Vue.directive("red",function (el, binding, vnode){
    el.style.color="red";

  })
  const app9 = new Vue({
    el: '#app9'
  });