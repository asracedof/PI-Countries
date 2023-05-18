const { Country, Activity } = require("../db");

const getCountryById = async (req, res) => {
  const { idPais } = req.params;
  try {
    const country = await Country.findOne({
      where: { id: idPais },
      include: { model: Activity,
        // attributes: ['id', 'name'],
        through: {
            attributes: [],
        },},
    });
    if (!country) {
      return res.status(404).json({ error: "Country not found" });
    }
    res.status(200).json(country);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error occurred" });
  }
};

module.exports = getCountryById;