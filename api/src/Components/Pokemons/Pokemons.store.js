const { Pokemon, Type } = require('../../db');
const axios = require('axios');

// ~--> POST.
exports.createPokemonStore = async ({
  name,
  nameType,
  life,
  attack,
  defense,
  speed,
  height,
  weight,
}) => {
  try {
    const [newPokemon, created] = await Pokemon.findOrCreate({
      where: { name },
      defaults: {
        name,
        life,
        attack,
        defense,
        speed,
        height,
        weight,
      },
    });
    if (created)
      nameType.forEach(async (element) => {
        const typeExist = await Type.findOrCreate({ where: { name: element } });
        newPokemon.addType(typeExist[0]);
      });
    else throw new Error(`The pokemon "${name}" already exists`);

    return newPokemon;
  } catch (error) {
    throw new Error(error.message);
  }
};
// &--> Get by id for api or database.
exports.getPokemonByIdStore = async (id) => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Number(id)}`);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
exports.getPokemonsByIdDbStore = async (id) => {
  try {
    const find = await Pokemon.findByPk(id);
    if (find === null) throw new Error('No se encontro el Pokemon');
    else return find;
  } catch (error) {
    throw new Error(error.message);
  }
};
// *--> Get all.
exports.getPokemonAllStore = async () => {
  try {
    const { data: getAll } = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const getAllDatabase = await Pokemon.findAll();
    return {
      db: getAllDatabase,
      api: getAll,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
// ^--> Get by name for database.
exports.getPokemonByParamsStore = async (name) => {
  try {
    const getByParams = await Pokemon.findOne({ where: { name } });
    if (getByParams !== null) return getByParams;

    const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).catch((err) => {
      throw new Error(`Pokemon '${name}' not found.`);
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
