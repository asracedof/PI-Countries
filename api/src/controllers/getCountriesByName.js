const { Op } = require('sequelize');
const { Country, Activity } = require('../db');

const getCountriesByName = async (req, res) => {
  const { name } = req.query;
  try {
    const searchCountries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      },
      include: { model: Activity }
    });
    if (!searchCountries.length) {
      return res.status(404).json({ error: "Country not found" });
    }
    res.status(200).json(searchCountries);
  } catch (error) {
    
    res.status(500).json({ error: "Server error occurred" });
  }
};

module.exports = getCountriesByName;
