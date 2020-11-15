"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var newTodoItemField = document.getElementById("new-todo-item");
    var addButton = document.getElementById("add-button");
    var list = document.getElementById("todo-list");
    var errorMessage = document.getElementById("error-message");


    addButton.addEventListener("click", function () {
        var newTodoItemText = newTodoItemField.value;

        if (newTodoItemText === "") {
            errorMessage.textContent = "Please, add some text";
            return;
        }

        function setViewMode() {
            listItem.innerHTML = "<span class='text'></span><button class='edit-button' type='button'>Edit</button>" +
                "<button class='delete-button' type='button'>Delete</button>";

            listItem.querySelector(".text").textContent = newTodoItemText;
            listItem.querySelector(".delete-button").addEventListener("click", function () {
                listItem.parentNode.removeChild(listItem);
            });

            listItem.querySelector(".edit-button").addEventListener("click", function () {
                listItem.innerHTML = "<input class='edit-text'></input><button class='save-button' type='button'>Save</button>" +
                    "<button class='cancel-button' type='button'>Cancel</button><span id='edit-error-message' class='error'></span>";
                listItem.querySelector(".edit-text").value = newTodoItemText;

                listItem.querySelector(".save-button").addEventListener("click", function () {
                    if (listItem.querySelector(".edit-text").value === "") {
                        var editErrorMessage = document.getElementById("edit-error-message");
                        editErrorMessage.textContent = "Please, add some text";
                        return;
                    } else {
                        newTodoItemText = listItem.querySelector(".edit-text").value;
                        setViewMode();
                    }
                });

                listItem.querySelector(".cancel-button").addEventListener("click", function () {
                    setViewMode();
                });
            });
        }

        var listItem = document.createElement("li");
        setViewMode();

        list.appendChild(listItem);
        newTodoItemField.value = "";
        errorMessage.textContent = "";
    });
});
