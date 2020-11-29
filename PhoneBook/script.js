"use strict";

$(document).ready(function () {
    var firstNameInputField = $("#first-name-input-field");
    var lastNameInputField = $("#last-name-input-field");
    var phoneNumberInputField = $("#phone-number-input-field");

    var addButton = $("#add-button");
    var table = $("#table");
    var errorMessage = $("#error-message");
    var errorMessagePhone = $("#error-message-phone");

    addButton.click(function () {
        var firstNameInputText = firstNameInputField.val().trim();
        var lastNameInputText = lastNameInputField.val().trim();
        var phoneNumberInputText = phoneNumberInputField.val().trim();
        var phoneNumberInputInt = parseInt(phoneNumberInputText.toString(), 10);

        if (firstNameInputText === "" || lastNameInputText === "" || phoneNumberInputText === "") {
            errorMessagePhone.text("");
            errorMessage.text("All fields must be filled");

            $("#form").find(".input-field").each(function () {
                if ($(this).val().trim() === "") {
                    $(this).addClass("empty-field");
                } else {
                    $(this).removeClass("empty-field");
                }
            });

            return;
        }

        cleanInputFieldErrorClasses();

        if (isNaN(phoneNumberInputInt)) {
            errorMessage.text("");
            errorMessagePhone.text("Phone must contain only digits");
            phoneNumberInputField.addClass("empty-field");
            return;
        }

        var listItem = $("<tr>");
        setViewMode();

        table.append(listItem);
        updateTableNumeration();
        cleanFieldsAndErrorMessages();

        function setViewMode() {
            listItem.html("<td class='id'></td ><td class='last-name'></td><td class='first-name'></td><td class='phone-number'></td>" +
                "<td class='delete-button'></td>");

            listItem.find(".last-name").text(lastNameInputText);
            listItem.find(".first-name").text(firstNameInputText);
            listItem.find(".phone-number").text(phoneNumberInputText);

            listItem.find(".delete-button").html("<button class=\"delete-button\" type=\"button\">Delete</button>");
            listItem.find(".delete-button").click(function () {
                listItem.remove();
                updateTableNumeration();
            });
        }

        function cleanFieldsAndErrorMessages() {
            firstNameInputField.val("");
            lastNameInputField.val("");
            phoneNumberInputField.val("");
            errorMessage.text("");
            errorMessagePhone.text("");
        }

        function cleanInputFieldErrorClasses() {
            $("#form").find(".input-field").each(function () {
                $(this).removeClass("empty-field");
            });
        }

        function updateTableNumeration() {
            $("#table tr").each(function (i) {
                $(this).find('td:first').text(i + ".");
            });
        }
    });
});