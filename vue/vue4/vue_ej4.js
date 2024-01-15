Vue.component('my-translator', {
    template: `
        <div component="my-translator">
            <h1>Traductor {{prop_idioma}} </h1>
            <input type="text" :placeholder="placeholderWord" v-model="word" />
            <input type="button" @click="Clear" value="Limpiar" />
            <div v-for="(match, index) in AnyMatch" :key="index">
                <span v-if="prop_idioma == 'ES'" >{{match.ES}}->{{match.EN}}</span>
                <span v-else>{{match.EN}}->{{match.ES}}</span>
            </div>
        </div>
    `,
    data() {
        let dict = [
            { 'EN': 'Hello', 'ES': 'Hola' },
            { 'EN': 'Bye', 'ES': 'Adios' },
            { 'EN': 'Good', 'ES': 'Bueno' },
            { 'EN': 'Bad', 'ES': 'Malo' }
        ]
        return {
            placeholderWord: 'Introduzca Palabra a traducir',
            word: '',
            dictionary: dict,
        };
    },
    computed: {
        AnyMatch() {
            let words = [];
            for (let pareja of this.dictionary) {
                console.log(pareja[this.prop_idioma]);
                if (this.word !== '' && pareja[this.prop_idioma].toLowerCase().includes(this.word.toLowerCase())) {
                    words.push(pareja);
                }
            }
            return words;
        }
    },
    props: {
        prop_idioma: { type:String, default:'ES'},
    },
    methods: { 
        Clear() { 
            this.word = '';
        } 
    }
});

new Vue({
    el: '#app',
    data: {}
});