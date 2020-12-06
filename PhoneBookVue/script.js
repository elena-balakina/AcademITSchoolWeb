new Vue({
    el: "#app",

    data: {
        items: [], // { id, firstName, lastName, phoneNumber }
        newFirstName: "",
        newLastName: "",
        newPhoneNumber: "",
        newId: 1,
        errors: []
    },

    methods: {
        checkFields: function () {
            this.errors = [];

            if (this.newFirstName.length === 0) {
                this.errors.push('First name can not be empty');
            }

            if (this.newLastName.length === 0) {
                this.errors.push('Last name can not be empty');
            }

            if (this.newPhoneNumber.length === 0) {
                this.errors.push('Phone number can not be empty');
            } else {
                var phoneNumberInt = parseInt(this.newPhoneNumber.toString(), 10);

                if (isNaN(phoneNumberInt)) {
                    this.errors.push('Phone number must contain only digits');
                }
            }

            return !this.errors.length;
        },

        addContact: function () {
            if (!this.checkFields()) {
                return
            }

            var firstName = this.newFirstName;
            var lastName = this.newLastName;
            var phoneNumber = this.newPhoneNumber;

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
        },

        deleteContact: function (item) {
            this.items = this.items.filter(function (x) {
                return x !== item;
            });
        }
    }
});
