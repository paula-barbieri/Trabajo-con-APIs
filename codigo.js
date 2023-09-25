document.addEventListener("DOMContentLoaded", async function() {
    
    let button = document.getElementById("btnBuscar");
    let pokemonName = document.getElementById("txtPokemon");
    let container = document.getElementById("container");
    
    button.addEventListener("click", function (){
        container.innerHTML = "";    
        const pokemon = pokemonName.value.toLowerCase();
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(data => {   
            var typesPoke = data.types
            var abilites = data.abilities
            container.innerHTML += 
                `
                    <h2>Nombre:${data.species.name}</h2>
                    <p>Tipo del pokemon: ${typesPoke[0].type.name}</p>
                    <p>Habilidades del pokemon: <ul>
                                                    <li>${abilites[0].ability.name}</li>
                                                    <li>${abilites[1].ability.name}</li>
                                                </ul> 
                    </p>
                    <img src="${data.sprites.front_default}">
                `;
            })
        // Mensaje de error por si ocurre un error al cargar el fetch.
        .catch(error => {
            console.error("Error al cargar los productos:", error);
        });   
    });
});
