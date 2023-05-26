const { Activity, Country } = require("../db");

const createActivity = async (req, res) => {
  try {
    // Obtener los datos del body
    const { name, difficulty, duration, season, types, countries } = req.body;

    if (!countries || countries.length <= 0) {
      return res.status(400).json({ error: "Country not found" });
    }

    // Crear la actividad turística
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
      types
    });

    // Asociar la actividad turística con los países indicados
    if (countries && countries.length > 0) {
      const associatedCountries = await Country.findAll({
        where: {
          id: countries
        }
      });
      await newActivity.setCountries(associatedCountries);
    }

    // Responder con la actividad turística creada
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(500).json({ error: "Server error occurred" });
  }
};

module.exports = createActivity;

