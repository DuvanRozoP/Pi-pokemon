const express = require('express');

const router = express.Router();
// !const { succes, error } = require('../../Network/response');

router.get('/', (request, response) => {
  response.send('GET /pokemons and GET /pokemons?name="..."');
});

router.get('/:id', (request, response) => {
  response.send('GET /pokemons/{idPokemon}');
});

router.post('/', (request, response) => {
  response.send('POST /pokemons');
});

router.get('/types', (request, response) => {
  response.send('POST /pokemons');
});

module.exports = router;
