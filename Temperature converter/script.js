"use strict";

document.addEventListener("DOMContentLoaded", function ready() {
    var celsiusInputField = document.getElementById("celsius");
    var kelvinOutputField = document.getElementById("kelvin");
    var fahrenheitOutputField = document.getElementById("fahrenheit");
    var convertButton = document.getElementById("convert-button");

    convertButton.addEventListener("click", function () {
        convertTemperatures();
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

    function convertTemperatures() {
        var celsiusTemperature = Number(celsiusInputField.value);

        if (celsiusInputField.value.trim() === "" || isNaN(celsiusTemperature)) {
            kelvinOutputField.textContent = "";
            fahrenheitOutputField.textContent = "";
            alert("Введите число");
        } else {
            kelvinOutputField.textContent = convertToKelvin(celsiusTemperature);
            fahrenheitOutputField.textContent = convertToFahrenheit(celsiusTemperature);
        }
    }
});