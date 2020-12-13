Vue.component("todo-list-item", {
    props: {
        item: {
            type: Object,
            required: true
        }
    },

    data: function () {
        return {
            editText: "",
            isEditing: false,
            itemError: ""
        }
    },

    template: "#todo-list-item-template",

    methods: {
        startEditItem: function () {
            this.editText = this.item.text;
            this.isEditing = true;
        },

        cancelEditItem: function () {
            this.isEditing = false;
        },

        saveItem: function () {
            if (this.editText.trim().length === 0) {
                this.itemError = "Item text can not be empty";
                return;
            }

            this.isEditing = false;
            this.itemError = "";
            this.$emit("save-item", this.item, this.editText);
        },

        deleteItem: function () {
            this.$emit("delete-item", this.item);
        }
    }
});

Vue.component("todo-list", {
    data: function () {
        return {
            items: [], // { id, text }
            newTodoText: "",
            newId: 1,
            newItemError: ""
        }
    },

    template: "#todo-list-template",

    methods: {
        addNewTodoItem: function () {
            var text = this.newTodoText;

            if (text.trim().length === 0) {
                this.newItemError = "Enter new item text";
                return;
            }

            this.items.push({
                id: this.newId,
                text: text
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

        saveItem: function (item, newText) {
            item.text = newText;
        }
    }
});

new Vue({
    el: "#app",
    methods: {}
});
