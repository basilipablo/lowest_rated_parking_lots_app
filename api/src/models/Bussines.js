const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dificulty: {
        type: DataTypes.ENUM,
        values: ['1', '2', '3', '4', '5']
    },
    time_span: {
        type: DataTypes.FLOAT(6)
    },
    season: {
        type: DataTypes.ENUM,
        values: ['summer', 'autumn', 'winter', 'spring', 'all_seasons']
    }
  });
};
