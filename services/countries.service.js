import axios from "axios";

class CountriesService {
    async getCountryInfo(country) {
        try {
            const [borderCountries, flag] = await Promise.all([
                this.borderCountries(country),
                this.getFlag(country),
            ]);

            const population = await this.populationData(flag.data.iso3);

            const countryObj = {
                borderCountries,
                population,
                flag,
            };

            return countryObj;
        } catch (error) {
            console.error('Error fetching country info:', error);
            return null;
        }
    }

    async borderCountries(country) {
        try {
            const response = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${country}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching border countries:', error);
            return null;
        }
    }

    async populationData(country) {
        const data = {
            iso3: country
        };

        try {
            const response = await axios.post('https://countriesnow.space/api/v0.1/countries/population', data);
            return response.data;
        } catch (error) {
            console.error('Error fetching population data:', error);
            return null;
        }
    }

    async getFlag(country) {
        const data = {
            iso2: country
        };

        try {
            const response = await axios.post('https://countriesnow.space/api/v0.1/countries/flag/images', data);
            return response.data;
        } catch (error) {
            console.error('Error fetching flag:', error);
            return null;
        }
    }
}

export default new CountriesService();
