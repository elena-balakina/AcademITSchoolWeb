new Vue({
    el: "#app",

    data: {
        items: [], // { id, text }
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
                text: text
            });

            this.newTodoText = "";
            this.newId++;
        }
    }
});
