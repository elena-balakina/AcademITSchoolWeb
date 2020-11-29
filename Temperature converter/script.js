"use strict";

document.addEventListener("DOMContentLoaded", function ready() {
    var celsiusInputField = document.getElementById("celsius");
    var kelvinInputField = document.getElementById("kelvin");
    var fahrenheitInputField = document.getElementById("fahrenheit");
    var convertButton = document.getElementById("convert-button");

    convertButton.addEventListener("click", function () {
        var celsiusTemperature = Number(celsiusInputField.value);
        convertTemperatures(celsiusTemperature);
    });

    celsiusInputField.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            var celsiusTemperature = Number(celsiusInputField.value);
            convertTemperatures(celsiusTemperature);
        }
    });

    function convertToKelvin(celsiusTemperature) {
        return (celsiusTemperature + 273.15).toFixed(2);
    }

    function convertToFahrenheit(celsiusTemperature) {
        return (celsiusTemperature * 1.8 + 32).toFixed(2);
    }

    function convertTemperatures(celsiusTemperature) {
        if (celsiusInputField.value === "" || isNaN(celsiusTemperature)) {
            alert("Введите число");
        } else {
            kelvinInputField.textContent = convertToKelvin(celsiusTemperature);
            fahrenheitInputField.textContent = convertToFahrenheit(celsiusTemperature);
        }
    }
});