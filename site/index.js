const app = document.querySelector("#app")
const spinner = document.querySelector(".spinner")

//const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

function addPokemonImage(pokemon) {
    const div = document.createElement("div")
   // div.classList("pokemon-listing")
    div.innerHTML = `
        <a href="pokemon.html?pokemon=${pokemon.name}">
        <img src ="${pokemon.sprites.front_default}" alt= ${pokemon.name}" />
        </a> 
        `
    app.append(div)
}
const url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=700"
fetch(url)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        const urls = parsedResponse.results.map(result => result.url)
        const fetches = urls.map(url => fetch(url).then(response => response.json()))
        return Promise.all(fetches)
    }).then(responses => {
        spinner.classList.add("hidden")
        responses.forEach(response => {
            addPokemonImage(response)
        })
    })

