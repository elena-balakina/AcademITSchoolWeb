"use strict";

document.addEventListener("DOMContentLoaded", function () {
    var newTodoItemField = document.getElementById("new-todo-item");
    var addButton = document.getElementById("add-button");
    var list = document.getElementById("todo-list");
    var errorMessage = document.getElementById("error-message");

    addButton.addEventListener("click", function () {
        var newTodoItemText = newTodoItemField.value.trim();

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
                if (document.getElementsByClassName("edit-text").length !== 0) {
                    window.document.querySelector(".cancel-button").click();
                }

                listItem.innerHTML = "<input class='edit-text'><button class='save-button' type='button'>Save</button>" +
                    "<button class='cancel-button' type='button'>Cancel</button>" +
                    "<div class='error'></div>";
                listItem.querySelector(".edit-text").value = newTodoItemText;

                listItem.querySelector(".save-button").addEventListener("click", function () {
                    if (listItem.querySelector(".edit-text").value.trim() === "") {
                        var editErrorMessage = document.querySelector("#todo-list .error");
                        editErrorMessage.textContent = "Please, add some text";
                        return;
                    }

                    newTodoItemText = listItem.querySelector(".edit-text").value;
                    setViewMode();
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
