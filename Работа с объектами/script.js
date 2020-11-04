"use strict";

var Russia = {
    name: "Russia",
    cities: [
        {
            cityName: "Moscow",
            population: 12000000,
        },
        {
            cityName: "Saint-Petersburg",
            population: 3500000,
        }, {
            cityName: "Novosibirsk",
            population: 1500000,
        },
        {
            cityName: "Krasnoyarsk",
            population: 1400000,
        }
    ]
};

var Germany = {
    name: "Germany",
    cities: [
        {
            cityName: "Berlin",
            population: 3600000,
        },
        {
            cityName: "Hamburg",
            population: 1800000,
        }, {
            cityName: "Munich",
            population: 1400000,
        }
    ]
};

var France = {
    name: "France",
    cities: [
        {
            cityName: "Paris",
            population: 2100000,
        },
        {
            cityName: "Lyon",
            population: 513000,
        }, {
            cityName: "Marseille",
            population: 860000,
        }
    ]
};

var UK = {
    name: "United Kingdom",
    cities: [
        {
            cityName: "London",
            population: 9750000,
        },
        {
            cityName: "Birmingham ",
            population: 2400000,
        }, {
            cityName: "Manchester ",
            population: 1900000,
        }
    ]
};

var countries = [Russia, Germany, France, UK]

console.log("Максимальное количество городов у страны: " + getMaxCitiesCount(countries));
console.log("Страны и их население: ");
printObject(getCountriesAndPopulationSum(countries));

function getMaxCitiesCount(countries) {
    var maxCitiesCount = 0;

    for (var country of countries) {
        if (country.cities.length > maxCitiesCount) {
            maxCitiesCount = country.cities.length;
        }
    }

    return maxCitiesCount;
}

function getCountriesAndPopulationSum(countries) {
    var result = {};

    for (var country of countries) {
        var countryPopulation = 0;

        for (var i = 0; i < country.cities.length; i++) {
            countryPopulation += parseInt(country.cities[0].population);
        }

        result[country.name] = countryPopulation;
    }

    return result;
}

function printObject(o) {
    var out = '';
    for (var p in o) {
        out += p + ': ' + o[p] + '\n';
    }

    console.log(out);
}