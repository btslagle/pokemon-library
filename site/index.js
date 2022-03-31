const app = document.querySelector("#app")
const spinner = document.querySelector(".spinner")


function addPokemonImage(url) {
    const img = document.createElement("img")
    img.src = url
    app.append(img)
}
const url = "https://pokeapi.co/api/v2/pokemon?limit=50"
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
        addPokemonImage(response.sprites.front_default)
        })
})   

