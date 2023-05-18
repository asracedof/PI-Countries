const { Country, Activity } = require('../db');

const getCountriesById = async (req, res) => {

    try {
        const {idPais} = req.params;
        let foundById = await Country.findOne({
            where: { id: idPais },
            include: { model: Activity }
        
        });
        if(!foundById) throw new Error("No hay pais con ese ID");
        res.status(200).json(foundById); 
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = getCountriesById;