const $pokemon = document.querySelector("#pokemon")
const $spinner = ddocument.querySelector(".spinner")

function addPokemonImage(pokemone) {
    console.log(pokemon) 
    const div = document.createElement("div")
    div.innerHTML= `
    <a href="pokemon.html?pokmon=${pokemon.name}">
    <img src ="${pokemon.sprites.front_default}" alt= ${pokemon.name}" />
    </a> `    


    