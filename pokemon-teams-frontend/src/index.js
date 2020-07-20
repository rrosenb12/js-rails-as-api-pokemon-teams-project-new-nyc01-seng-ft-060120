document.addEventListener('DOMContentLoaded', (e) => {
    const BASE_URL = "http://localhost:3000"
    const TRAINERS_URL = `${BASE_URL}/trainers`
    const POKEMONS_URL = `${BASE_URL}/pokemons`
    const trainersCont = document.getElementsByTagName('main')
    const trainersContainer = trainersCont[0]
    trainersContainer.className = 'trainers-container'


    const fetchTrainers = () => {
        fetch(TRAINERS_URL)
        .then(response => response.json())
        .then(trainersObject => trainersObject.forEach(trainer => renderTrainer(trainer)))
    }

    const fetchPokemons = () => {
        fetch(POKEMONS_URL)
        .then(response => response.json())
        .then(pokemonsObject => renderPokemon(pokemonsObject))//pokemonsObject.forEach(pokemon => renderPokemon(pokemon)))
    }

    const renderPokemon = (pokemonsObject) => {
        pokemonsObject.
    }

    const renderTrainer = (trainer) => {
        const trainerCard = document.createElement('div')

        trainerCard.className = 'trainer-name'
        trainerCard.dataset.id = trainer.id
        trainerCard.textContent = `${trainer.name}`
        
        trainersContainer.append(trainerCard)
    }

    fetchPokemons()
    fetchTrainers()
})


