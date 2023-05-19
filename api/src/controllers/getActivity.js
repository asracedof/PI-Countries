const { Activity, Country } = require("../db");

const getActivityById = async (req, res) => {
  try {
    // Obtener el id de la actividad de los parámetros de la URL
    const activityId = req.params.id;

    // Buscar la actividad por su id y cargar los países asociados
    const activity = await Activity.findOne({
      where: { id: activityId },
      include: [Country],
    });

    // Si la actividad no existe, enviar un mensaje de error
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    // Si la actividad existe, responder con la información detallada de la actividad
    const response = {
      id: activity.id,
      name: activity.name,
      difficulty: activity.difficulty,
      duration: activity.duration,
      season: activity.season,
      countries: activity.countries.map((country) => ({
        id: country.id,
        name: country.name,
        
       })),
    };
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "Server error occurred" });
  }
};

module.exports = getActivityById;
