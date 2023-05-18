const { Activity } = require('../db');

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.findAll();
    if (!activities.length) {
      return res.status(404).json({ error: "Activities not found" });
    }
    res.status(200).json(activities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error occurred" });
  }
};

module.exports = getActivities;
