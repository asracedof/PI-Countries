const { Activity, Country } = require('../db');
const postActivities = async (req, res) => {
    try {
        const { name, difficulty, duration, season, types,  countries } = req.body;
        
        const newActivity = await Activity.create({
             name, difficulty, duration, season, types
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