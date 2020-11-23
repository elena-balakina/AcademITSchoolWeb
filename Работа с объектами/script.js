(function () {
    "use strict";

    var countries = [{
        name: "Russia",
        cities: [
            {
                cityName: "Moscow",
                population: 12000000
            },
            {
                cityName: "Saint-Petersburg",
                population: 3500000
            },
            {
                cityName: "Novosibirsk",
                population: 1500000
            },
            {
                cityName: "Krasnoyarsk",
                population: 1400000
            }
        ]
    },
        {
            name: "Germany",
            cities: [
                {
                    cityName: "Berlin",
                    population: 3600000
                },
                {
                    cityName: "Hamburg",
                    population: 1800000
                },
                {
                    cityName: "Munich",
                    population: 1400000
                }
            ]
        },
        {
            name: "France",
            cities: [
                {
                    cityName: "Paris",
                    population: 2100000
                },
                {
                    cityName: "Lyon",
                    population: 513000
                },
                {
                    cityName: "Marseille",
                    population: 860000
                }
            ]
        },
        {
            name: "United Kingdom",
            cities: [
                {
                    cityName: "London",
                    population: 9750000
                },
                {
                    cityName: "Birmingham",
                    population: 2400000
                },
                {
                    cityName: "Manchester",
                    population: 1900000
                }
            ]
        }
    ];

    console.log("Максимальное количество городов у страны: " + getMaxCitiesCount(countries));
    console.log("Страна(ы) с максимальным количеством городов:");
    console.log(getCountriesWithMaxCitiesCount(countries));

    console.log("Страны и их население: ");
    console.log(getCountriesAndPopulationSum(countries));

    function getMaxCitiesCount(countries) {
        return countries.reduce(function (max, current) {
            return Math.max(max, current.cities.length);
        }, 0);
    }

    function getCountriesWithMaxCitiesCount(countries) {
        var maxCitiesCount = getMaxCitiesCount(countries);

        return countries.filter(function (country) {
            return country.cities.length === maxCitiesCount;
        });
    }

    function getCountriesAndPopulationSum(countries) {
        var result = {};

        countries.forEach(function (country) {
            result[country.name] = country.cities.reduce(function (sum, currentCity) {
                return sum + currentCity.population;
            }, 0);
        });

        return result;
    }
})();