const { getCountries, getCountriesAsync, getMultipleData, getCategories } = require('../controllers/lookup');

const router = require('express').Router();

router.get("/getCountries",getCountries);
router.get("/getCountriesAsync",getCountriesAsync);
router.get("/getMultipleData",getMultipleData);
router.get("/getCategories",getCategories);
module.exports = router;