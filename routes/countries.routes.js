import { Router } from "express";
import countriesController from "../controllers/countries.controller.js";

const routerCountry = Router();

routerCountry.get('/countries', async (req, res) => {
    return countriesController.getAvailableCountries(req, res);
})

routerCountry.get('/countryInformation/:countryCode', async(req, res) => {
    console.log('passou')
    return countriesController.getCountryInfo(req, res);
})

export default routerCountry;