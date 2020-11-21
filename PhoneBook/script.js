"use strict";

$(document).ready(function () {
    var firstNameInputField = $("#first-name-input-field");
    var lastNameInputField = $("#last-name-input-field");
    var phoneNumberInputField = $("#phone-number-input-field");

    var addButton = $("#add-button");
    var table = $("#table");
    var errorMessage = $("#error-message");

    addButton.click(function () {
        var firstNameInputText = firstNameInputField.val();
        var lastNameInputText = lastNameInputField.val();
        var phoneNumberInputText = phoneNumberInputField.val();
        var phoneNumberInputInt = parseInt(phoneNumberInputText.toString(), 10);

        $(".input-field").each(function () {
            if ($(this).val() !== "") {
                errorMessage.text("");
                $(this).removeClass("empty_field");
            } else {
                errorMessage.text("All field must be filled");
                $(this).addClass("empty_field");
            }
        });

        if (phoneNumberInputText !== "" && !isNaN(phoneNumberInputInt)) {
            $(phoneNumberInputField).removeClass("empty_field");
        } else if (phoneNumberInputText !== "" && isNaN(phoneNumberInputInt)) {
            errorMessage.text("Phone number field allows only digits");
            phoneNumberInputField.val("");
            phoneNumberInputField.focus();
            $(phoneNumberInputField).addClass("empty_field");
            return;
        } else {
            errorMessage.text("All field must be filled");
            $(phoneNumberInputField).addClass("empty_field");
            return;
        }

        function setViewMode() {
            listItem.html("<td class='id'>1</td ><td class='last-name'></td><td class='first-name'></td><td class='phone-number'></td>" +
                "<td class='delete-button'></td>");

            listItem.find(".last-name").text(lastNameInputText);
            listItem.find(".first-name").text(firstNameInputText);
            listItem.find(".phone-number").text(phoneNumberInputText);

            listItem.find(".delete-button").html("<button class=\"delete-button\" type=\"button\">Delete</button>");
            listItem.find(".delete-button").click(function () {
                listItem.remove();
            });
        }

        var listItem = $("<tr>");
        setViewMode();

        table.append(listItem);
        firstNameInputField.val("");
        lastNameInputField.val("");
        phoneNumberInputField.val("");
        errorMessage.text("");
    });
});