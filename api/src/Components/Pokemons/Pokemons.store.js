const { Pokemon } = require('../../db');
const axios = require('axios');

exports.createPokemon = async ({ name, life, attack, defense, speed, height, weight }) => {
  try {
    const newPokemon = await Pokemon.create({
      name: name,
      life: life,
      attack: attack,
      defense: defense,
      speed: speed,
      height: height,
      weight: weight,
    });
    return newPokemon;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getPokemonById = async (id) => {
  try {
    const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Number(id)}`);
    return pokemon.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
