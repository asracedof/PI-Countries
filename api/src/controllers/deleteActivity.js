const { Activity } = require('../db');

const deleteActivity = async (req, res) => {
  try {
    const activityId = req.params.id;
    const activity = await Activity.findByPk(activityId);

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found.' });
    }

    await activity.destroy();

    return res.status(200).json({ message: 'Activity successfully deleted.' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting activity.' });
  }
};

module.exports = deleteActivity;
