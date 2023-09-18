const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 8001

app.use(cors())

const pokemon = {
    'squirtle' : {
        'type' : 'water',
        'finalEvolution' : 'Blastoise',
        'nextEvolutionLevel' : 16
    },
    'charmander' : {
        'type' : 'fire',
        'finalEvolution' : 'Charzard',
        'nextEvolutionLevel' : 16
    },
    'bulbasaur' : {
        'type' : 'grass',
        'finalEvolution' : 'Venasaur',
        'nextEvolutionLevel' : 16
    },
    'pikachu' : {
        'type' : 'electric',
        'finalEvolution' : 'Raichu',
        'nextEvolutionLevel' : 0
    },
    'chikorita' : {
        'type' : 'grass',
        'finalEvolution' : 'Meganium',
        'nextEvolutionLevel' : 16
    },
    'sprigatito' : {
        'type' : 'grass',
        'finalEvolution' : 'Meowscarada',
        'nextEvolutionLevel' : 16
    },
    'unknown': {
        'type' : 'unknown',
        'finalEvolution' : 'unknown',
        'nextEvolutionLevel' : 0
    }
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:pokemonName', (request,response)=> {
    const pokemonNameReq = request.params.pokemonName.toLowerCase()
    if (pokemon[pokemonNameReq]) {
        response.json(pokemon[pokemonNameReq])
    }else {
        response.json(pokemon['unknown'])
    }
})




app.listen(PORT, () => {
    console.log('WE ARE RUNNING OUT HERE')
})

