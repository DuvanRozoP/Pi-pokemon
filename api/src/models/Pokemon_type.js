const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('pokemon_type', {
    pok_typ_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }
  });
};
