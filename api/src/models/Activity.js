const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('activity', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        comment: 'Unique identifier for the activity',
      }, 
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'Name of the activity',
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: 'Difficulty level of the activity (1-5)',
        validate: {
          min: 1,
          max: 5,
        },
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'Duration of the activity',
      },
      season: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Season during which the activity is recommended',
      },
   
    }, {
      comment: 'Table containing information about activities',
      tableName: 'activity',
      timestamps: false,
    });    
  };

  // createdInBD: {
  //   type: DataTypes.BOOLEAN,
  //   allowNull: false,
  //   defaultValue:true,
  //   comment: 'Created in database',
  // }