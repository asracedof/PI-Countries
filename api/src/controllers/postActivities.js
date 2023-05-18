const { Activity, Country } = require('../db');
const postActivities = async (req, res) => {
    try {
        const { name, level, duration, season,  countries } = req.body;
        
        const newActivity = await Activity.create({
             name, level, duration, season
        })
        
        for(let i=0; i< countries.length; i++){
            const countryInstance = await Country.findOne({
              where :{
                id : countries[i]
              }  
            });
            
        await countryInstance.addActivity(newActivity);
        }

        res.status(200).json(newActivity);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = postActivities;