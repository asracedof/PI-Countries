const { Activity } = require('../db');

const putActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season,  types, countries } = req.body;
    const activityId = req.params.id;
    const activity = await Activity.findByPk(activityId);

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found.' });
    }

    await activity.update({ name, difficulty, duration, types,  season });
    await activity.setCountries(countries);

    return res.status(200).json(activity);
  } catch (error) {
    return res.status(500).json({ message: 'Error updating activity.' });
  }
};

module.exports = putActivity;
