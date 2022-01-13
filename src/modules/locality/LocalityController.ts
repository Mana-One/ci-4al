import { Controller, Get } from "@nestjs/common";
const countries = require("../../../assets/locality/countries.json");
const languages = require("../../../assets/locality/languages.json");

@Controller("locality")
export class LocalityController {
    @Get("countries")
    async getCountries() {
        return countries;
    }

    @Get("languages")
    async getLanguages() {
        return Object.values(languages);
    }
}