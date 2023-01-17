const express = require('express');

const router = express.Router();
const { succes, error } = require('../../Network/response');
const { getPokemonById, postPokemonDb } = require('./Pokemons.controller');

router.get('/', (request, response) => {
  response.send('GET /pokemons and GET /pokemons?name="..."');
});

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const pokemon = await getPokemonById(id);
    succes(response, 200, pokemon);
  } catch (err) {
    error(response, 404, err.message);
  }
});

router.post('/', async (request, response) => {
  try {
    const data = request.body;
    const newPokemon = await postPokemonDb(data);
    succes(response, 200, newPokemon);
  } catch (err) {
    error(response, 404, err.message);
  }
});

// router.get('/types', (request, response) => {
//   response.send('POST /pokemons');
// });

module.exports = router;
