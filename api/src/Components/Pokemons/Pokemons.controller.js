const { getPokemonById, createPokemon } = require('./Pokemons.store');

exports.getPokemonById = async (id) => {
  try {
    const pokemon = await getPokemonById(id);
    return pokemon;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.postPokemonDb = async (data) => {
  try {
    if (Object.values(data).length <= 0) throw new Error('Data Invalid');

    const { name } = data;
    if (name.length <= 0) throw new Error('Invalid Name');

    const validarNumber = Object.values(data).slice(1);
    for (const value of validarNumber)
      if (typeof value !== 'number') throw new Error(`Invalid ${value} number`);

    const pokemon = await createPokemon(data);
    return `the pokemon ${pokemon.name} has been created successfully`;
  } catch (error) {
    throw new Error(error.message);
  }
};
