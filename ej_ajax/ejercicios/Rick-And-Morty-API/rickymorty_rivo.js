//variables
const search_container = document.querySelector('.search');
const search_button = document.getElementById('search-button');
const search_bar = document.getElementById('search-bar');
const result_container = document.querySelector('.result');

const search_count = document.createElement('div');
search_count.textContent = "0";
search_count.id = 'search_count';
search_container.appendChild(search_count);

const url ='https://rickandmortyapi.com/api/character/?page=1';

    search_button.addEventListener("click", async function (){
        await api_search();
    });
    async function api_search(){
        //reset contenido de result_container
        result_container.innerHTML = '';

        const busqueda = search_bar.value;
        await fetch_all(url, busqueda);
    }
    async function fetch_all(fetch_url, busqueda){
        let characters = [];
        let next_page_url = fetch_url;

        do{
            await fetch(next_page_url).then((response)=>{
                return response.json(); //recogemos la info
            })
            .then((response_data)=>{
                //buscar la siguiente página de la consulta
                next_page_url = response_data.info.next;

                // console.log(response_data.info.next);
                response_data.results.forEach(character => {

                    if(character.name.toLowerCase().includes(busqueda) == false && busqueda){
                        return;
                    } else{
                        characters.push(character);
                    }
                });
            })
            .catch((err) =>{
                console.log("Hubo un error en la consulta");
                console.log(err);
            });
        } while(next_page_url && next_page_url !=null);
        
        if(characters.length == 0){
            //create card
            const card = document.createElement('div');
            card.className = 'card';
            result_container.appendChild(card);
                
            //create title
            const nameDiv = document.createElement('div');
            nameDiv.className = 'card-title';
            nameDiv.textContent = "nu hay";
            card.appendChild(nameDiv);      
        } else {

            characters.forEach(character => {
                //create card
                const card = document.createElement('div');
                card.className = 'card';
                result_container.appendChild(card);
    
                //create img
                const img = document.createElement('img');
                img.src = character.image;
                card.appendChild(img);
    
                //create title
                const nameDiv = document.createElement('div');
                nameDiv.className = 'card-title';
                nameDiv.textContent = character.name;
                card.appendChild(nameDiv);
            });
        }
        // actualizar el contador
        search_count.textContent = characters.length;
    }

//ON LOAD
document.addEventListener("DOMContentLoaded", api_search);