const axios = require('axios');
const sql = require("mssql");
const dbConfig = require("../../config/dbconnection");
const { getCategoriesFromDB } = require('../../queries/query');
const getCountries = (req, res) => {
    axios(process.env.COUNTRIES_URL).then(result => {
        const modifiedResult = result.data.map(x => {
            return { name: x.name, code: x.alpha3Code }
        })
        res.json(modifiedResult);
    }).catch(err => {
        res.json(err);
    });
};

const getCountriesAsync = async (req, res) => {
    try {
        const result = await axios(process.env.COUNTRIES_URL);
        const modifiedResult = result.data.map(x => {
            return { name: x.name, code: x.alpha3Code }
        })
        res.json(modifiedResult);
    }
    catch (ex) {
        res.json(ex);
    }
}
const getMultipleData = (req, res) => {
    const arrayOfApis = [
        axios(process.env.COUNTRIES_URL),
        axios(process.env.ASSET_PLATFORMS)
    ];
    Promise.all(arrayOfApis).then(result => {
        res.json(
            { countries: result[0].data,
             platforms: result[1].data }
             )
    }).catch(err => {
        res.json(err);

    });
}

const getCategories = async(req,res)=>{
    try{
    await sql.connect(dbConfig);
    let result = await sql.query(getCategoriesFromDB)
    console.log(result);
    res.json({"message":result.recordset})
    }
    catch(ex){
        console.log(ex)
    }
};

module.exports = {
    getCountries,
    getCountriesAsync,
    getMultipleData,
    getCategories
}