const { DataTypes } = require('sequelize');

// Luego le injectamos la conexion a sequelize.
 module.exports = (sequelize) => {
    sequelize.define('country', {
      id: {
        type: DataTypes.STRING(3),
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
        validate: {
          isAlpha: true,
          isUppercase: true,
          isThree: (cod) => {
            if (cod.length !== 3) {
              throw Error('Country ID must consist of 3 uppercase letters.')
            }
          }
        },
        comment: 'Unique identifier for the country',
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment: 'Name of the country',
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'URL of the country flag image',
      },
      continents: {
        type: DataTypes.ENUM("Europe","Asia","Africa","Oceania","Antarctica","America"),
        allowNull: false,
        comment: 'Continent to which the country belongs',
      },
      subregion: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'Subregion to which the country belongs',
      },
      
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Capital city of the country',
      },
  
      area: {
        type: DataTypes.FLOAT,
        allowNull: true,
        comment: 'Area of the country in square kilometers',
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'Population of the country',
      },
     }, {
      comment: 'Table containing information about countries',
      tableName: 'countries',
      timestamps: false,
    });
   }
