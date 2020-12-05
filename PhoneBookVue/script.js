new Vue({
    el: "#app",

    data: {
        items: [], // { id, firstName, lastName, phoneNumber }
        newFirstName: "",
        newLastName: "",
        newPhoneNumber: "",
        newId: 1
    },

    methods: {
        addContact: function () {
            var firstName = this.newFirstName;
            var lastName = this.lastName;
            var phoneNumber = this.phoneNumber;

            this.items.push({
                id: this.newId,
                newFirstName: firstName,
                newLastName: lastName,
                newPhoneNumber: phoneNumber
            });

            this.newFirstName = "";
            this.newLastName = "";
            this.newPhoneNumber = "";
            this.newId++;
        }
    }
});
