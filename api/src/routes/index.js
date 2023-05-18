const { Router } = require('express');
const { login } = require('../controllers/login');
//!RUTAS COUNTRY
const getCountries = require("../controllers/getCountries")
const getCountriesByName = require("../controllers/getCountriesByName");
const getCountryById = require ('../controllers/getCountryById');
//!RUTAS ACTIVITY
const createActivity = require("../controllers/createActivity");
const getActivities = require("../controllers/getActivities");
const getActivity = require("../controllers/getActivity");
const putActivity = require("../controllers/putActivity");
const deleteActivity = require("../controllers/deleteActivity");


const router = Router();

router.get("/countries",getCountries)
router.get('/countries/name', getCountriesByName);
router.get('/countries/:idPais', getCountryById );
router.post('/activities', createActivity);
router.get('/activities', getActivities);
router.get('/activities/:id', getActivity);
router.put('/activities/:id', putActivity);
router.delete('/activities/:id', deleteActivity);
router.get('/login', login);

module.exports = router;
