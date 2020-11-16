"use strict";

document.addEventListener("DOMContentLoaded", function ready() {
    function convertToKelvin(celsius) {
        return (celsius + 273.15).toFixed(2);
    }

    function convertToFahrenheit(celsius) {
        return (celsius * 1.8 + 32).toFixed(2);
    }

    function convertTemperatures() {
        var celsius = document.getElementById('celsius');
        var celsiusTemperature = Number(celsius.value);

        var kelvin = document.getElementById('kelvin');
        var fahrenheit = document.getElementById('fahrenheit');

        if (celsiusTemperature === 0) {
            alert("Введите число")
        } else if (isNaN(celsiusTemperature)) {
            alert("Введите число");
        } else {
            kelvin.textContent = convertToKelvin(celsiusTemperature);
            fahrenheit.textContent = convertToFahrenheit(celsiusTemperature);
        }

        celsius.value = "";
    }

    var convertButton = document.getElementById('convert-button');
    convertButton.addEventListener("click", function () {
        convertTemperatures();
    });

    var celsius = document.getElementById('celsius');
    celsius.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            convertTemperatures();
        }
    });
});