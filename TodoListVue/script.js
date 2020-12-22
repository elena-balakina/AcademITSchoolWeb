new Vue({
    el: "#app",

    data: {
        items: [], // { id, text, isEditing, editText, itemError }
        newTodoText: "",
        newId: 1,
        newItemError: ""
    },

    methods: {
        addNewTodoItem: function () {
            var text = this.newTodoText;

            if (text.trim().length === 0) {
                this.newItemError = "Enter new item text";
                return;
            }

            this.items.push({
                id: this.newId,
                text: text,
                isEditing: false,
                editText: text,
                itemError: ""
            });

            this.newTodoText = "";
            this.newId++;
            this.newItemError = "";
        },

        deleteItem: function (item) {
            this.items = this.items.filter(function (x) {
                return x !== item;
            });
        },

        startEditItem: function (item) {
            item.isEditing = true;
        },

        cancelEditItem: function (item) {
            item.isEditing = false;
            item.editText = item.text;
            item.itemError = ""
        },

        saveItem: function (item) {
            if (item.editText.trim().length === 0) {
                item.itemError = "Item text can not be empty";
                return;
            }

            item.isEditing = false;
            item.text = item.editText;
            item.itemError = "";
        }
    }
});
