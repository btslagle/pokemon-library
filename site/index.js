const pokemonListing = document.querySelector("#pokemon-listing")
const spinner = document.querySelector(".spinner")
function addPokemonImage(pokemon) {
    const div = document.createElement("div")
    div.innerHTML = `
        <figure>
        <img src ="${pokemon.sprites.front_default}" alt= ${pokemon.name}" />
        <figcaption><a href="pokemon.html?pokemon=${pokemon.name}">${pokemon.name}</a></figcaption> 
        </figure>
        `
    pokemonListing.append(div)
}
let url = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=345"
fetch(url)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        console.log(parsedResponse)
        const urls = parsedResponse.results.map(result => result.url)
        const fetches = urls.map(url => fetch(url).then(response => response.json()))
        return Promise.all(fetches)
    }).then(responses => {
        spinner.classList.add("hidden")
        responses.forEach(response => {
            addPokemonImage(response)
        })
    })

