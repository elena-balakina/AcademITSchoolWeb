function get(url, data) {
    return $.get(url, data);
}

function post(url, data) {
    return $.post({
        url: url,
        contentType: "application/json",
        data: JSON.stringify(data)
    });
}

function PhoneBookService() {
    this.baseURL = "/api/";

    this.getContacts = function (term) {
        return get(this.baseURL + "getContacts", { term: term });
    };

    this.addContact = function (contact) {
        return post(this.baseURL + "addContact", {contact: contact});
    };

    this.deleteContact = function (id) {
        return post(this.baseURL + "deleteContact", {id: id});
    };
}

new Vue({
    el: "#app",

    data: {
        contacts: [], // { id, firstName, lastName, phoneNumber }
        firstName: "",
        lastName: "",
        phoneNumber: "",
        term: "",
        errors: [],
        service: new PhoneBookService()
    },

    created: function () {
        this.loadContacts();
    },

    methods: {
        loadContacts: function () {
            var self = this;

            // ?term=term
            this.service.getContacts(this.term).done(function (response) {
                self.contacts = response;
            }).fail(function () {
                alert("Request failed");
            });
        },

        clearSearch: function () {
            this.term = "";
            this.loadContacts();
        },

        checkFields: function () {
            this.errors = [];

            if (this.firstName.length === 0) {
                this.errors.push('First name can not be empty');
            }

            if (this.lastName.length === 0) {
                this.errors.push('Last name can not be empty');
            }

            if (this.phoneNumber.length === 0) {
                this.errors.push('Phone number can not be empty');
            } else {
                var phoneNumberInt = parseInt(this.phoneNumber.toString(), 10);

                if (isNaN(phoneNumberInt)) {
                    this.errors.push('Phone number must contain only digits');
                }
            }

            return !this.errors.length;
        },

        addContact: function () {
            if (!this.checkFields()) {
                return;
            }

            var contact = {
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber
            }

            var self = this;

            this.service.addContact(contact).done(function (response) {
                if (!response.success) {
                    alert(response.message);
                    return;
                }

                self.firstName = "";
                self.lastName = "";
                self.phoneNumber = "";

                self.loadContacts();
            }).fail(function () {
                alert("Request failed");
            });
        },

        deleteContact: function (contact) {
            var self = this;

            this.service.deleteContact(contact.id).done(function (response) {
                if (!response.success) {
                    alert(response.message);
                    return;
                }

                self.loadContacts();
            }).fail(function () {
                alert("Request failed");
            });
        }
    }
});