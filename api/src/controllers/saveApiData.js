const axios = require("axios");
const { Country } = require("../db");
const { API_URL } = process.env;
const  data = require('../utils/data'); // Importar el archivo data.js

const saveApiData = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    const countries = response.data;
       
    await Promise.all(
      countries.map(async (country) => {
        const [dbCountry, created] = await Country.findOrCreate({
          where: {
            id: country.cca3,
          },
          defaults: {
            name: country.name.common,
            image: country.flags[0] || 'default-image-url',
            continents: getContinentName(country.continents[0]),
            capital: country.capital ? country.capital[0] : "No capital",
            subregion: country.subregion || "No subregion",
            area: country.area,
            population: country.population,
          },
        });

        if (!created) {
          updateDbCountry(dbCountry, country);
        }
      })
    );
  } catch (error) {
    console.error("Error in saveApiData: ", error);
    console.log("External API not available, using stored data");
    // Si hay un error, se utiliza el archivo data.js
    await Promise.all(
      data.map(async (country) => {
        const [dbCountry, created] = await Country.findOrCreate({
          where: {
            id: country.cca3,
          },
          defaults: {
            name: country.name.common,
            image: country.flags.svg,
            continents: getContinentName(country.continents[0]),
            capital: country.capital ? country.capital[0] : "No capital",
            subregion: country.subregion || "No subregion",
            area: country.area,
            population: country.population,
          },
        });

        if (!created) {
          updateDbCountry(dbCountry, country);
        }
      })
    );
  }
};

const getContinentName = (continents) => {
  const americaNames = ["North America", "South America", "Central America"];

  if (americaNames.includes(continents)) {
    return "America";
  }

  return continents;
};

const updateDbCountry = async (dbCountry, country) => {
  dbCountry.name = country.name.common;
  dbCountry.image = country.flags[0] || 'default-image-url';
  dbCountry.continents = getContinentName(country.continents[0]);
  dbCountry.capital = country.capital ? country.capital[0] : "No capital";
  dbCountry.subregion = country.subregion || "No subregion";
  dbCountry.area = country.area;
  dbCountry.population = country.population;
  await dbCountry.save();
};

module.exports = { saveApiData };



  