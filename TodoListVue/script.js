new Vue({
    el: "#app",

    data: {
        items: [], // { id, text, isEditing, editText }
        newTodoText: "",
        newId: 1
    },

    methods: {
        addNewTodoItem: function () {
            var text = this.newTodoText;

            if (text.trim().length === 0) {
                return;
            }

            this.items.push({
                id: this.newId,
                text: text,
                isEditing: false,
                editText: text
            });

            this.newTodoText = "";
            this.newId++;
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
        },

        saveItem: function (item) {
            if (item.editText.trim().length === 0) {
                return;
            }

            item.isEditing = false;
            item.text = item.editText;
        }
    }
});
