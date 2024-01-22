const app = new Vue({
    el: '#app',
    data: {
      message: 'Probando watch'
    },
    /**para observar una propiedad. El bloque watch se define como un objeto, y cada variable del mismo es una función con el mismo nombre que la propiedad, con lo que cada vez que el valor de la propiedad cambie se ejecutará la función. La función tiene dos argumentos: el antiguo valor y el nuevo  */
    watch:{
        message: function(nuevoValor, anteriorValor){
            console.log("VALOR NUEVO: ",nuevoValor,"\tVALOR ANTERIOR: ",anteriorValor);
        }
    }

  });

  const app2 = new Vue({
    el: '#app2',
    data: {
        operador1: '0',
        operador2: '0'
    },
    /**las propiedades computed nos dan un punto de eficiencia ya que sólo se evalúan en el momenot que afecte a alguna parte de su cálculo. No se les llama, sino que e ejecutan cuando detectan que cambia su valor las propiedades que tiene asociadas */
    computed:{
        resultSuma: function(){
           let op1 = parseInt(this.operador1);
           let op2 = parseInt(this.operador2);
           console.log(op1+" + "+op2+" = "+(op1+op2));
           return op1+op2;
        }
    }
    
  });