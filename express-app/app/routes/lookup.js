const { getCountries, getCountriesAsync, getMultipleData } = require('../controllers/lookup');

const router = require('express').Router();

router.get("/getCountries",getCountries);
router.get("/getCountriesAsync",getCountriesAsync);
router.get("/getMultipleData",getMultipleData);
module.exports = router;