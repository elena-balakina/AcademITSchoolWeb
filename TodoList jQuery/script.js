"use strict";

$(document).ready(function () {
    var newTodoItemField = $("#new-todo-item");
    var addButton = $("#add-button");
    var list = $("#todo-list");
    var errorMessage = $("#error-message");

    addButton.click(function () {
        var newTodoItemText = newTodoItemField.val();

        if (newTodoItemText === "") {
            errorMessage.text("Please, add some text");
            return;
        }

        function setViewMode() {
            listItem.html("<span class='text'></span><button class='edit-button' type='button'>Edit</button>" +
                "<button class='delete-button' type='button'>Delete</button>");

            listItem.find(".text").text(newTodoItemText);
            listItem.find(".delete-button").click(function () {
                listItem.remove();
            });

            listItem.find(".edit-button").click(function () {
                var errorMessage = $("#error-message");
                errorMessage.text("");
            });

            listItem.find(".edit-button").click(function () {
                listItem.html("<input class='edit-text'></input><button class='save-button' type='button'>Save</button>" +
                    "<button class='cancel-button' type='button'>Cancel</button><span id='edit-error-message' class='error'></span>");
                listItem.find(".edit-text").val(newTodoItemText);

                listItem.find(".save-button").click(function () {
                    if (listItem.find(".edit-text").val() === "") {
                        var editErrorMessage = $("#edit-error-message");
                        editErrorMessage.text("Please, add some text");
                        return;
                    } else {
                        newTodoItemText = listItem.find(".edit-text").val();
                        setViewMode();
                    }
                });

                listItem.find(".cancel-button").click(function () {
                    setViewMode();
                });
            });
        }

        var listItem = $("<li>");
        setViewMode();

        list.append(listItem);
        newTodoItemField.val("");
        errorMessage.text("");
    });
});
