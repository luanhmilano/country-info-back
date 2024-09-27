import axios from 'axios';
import countriesService from "../services/countries.service.js";

class CountriesController {
    async getAvailableCountries(request, response) {
        try {
            const { data: countriesList } = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
            return response.status(200).json(countriesList);
        } catch (error) {
            return response.status(500).json({ message: 'Error fetching countries list' });
        }
    }

    async getCountryInfo(request, response) {
        try {
            const countryInfo = await countriesService.getCountryInfo(request.params.countryCode);
            return response.status(200).json(countryInfo);
        } catch (error) {
            console.log(error);
            return response.status(500).json({ message: 'Error fetching country info' });
        }
    }
}

export default new CountriesController();