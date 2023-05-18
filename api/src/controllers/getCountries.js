const { Country, Activity } = require("../db");

let countriesCache = null;

const getCountries = async (req, res) => {
  try {
    if (countriesCache) {
        return res.status(200).json(countriesCache);
    }
    
    const countriesWithActivities = await Country.findAll({
      include: { model: Activity },
    });
    
    if (!countriesWithActivities.length) {
      return res.status(404).json({ error: "Country not found" });
    }
    
     countriesCache = countriesWithActivities;

    res.status(200).json(countriesWithActivities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error occurred" });
  }
};

module.exports = getCountries;




