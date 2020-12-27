import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import Vue from "vue";

import "bootstrap/scss/bootstrap.scss";
import "../scss/style.scss";

function get(url, data) {
    return $.get(url, data);
}

function post(url, data) {
    return $.post({
        url,
        contentType: "application/json",
        data: JSON.stringify(data)
    });
}

class PhoneBookService {
    constructor() {
        this.baseURL = "/api/";
    }

    getContacts(term) {
        return get(this.baseURL + "getContacts", { term });
    };

    addContact(contact) {
        return post(this.baseURL + "addContact", { contact });
    };

    deleteContact(id) {
        return post(this.baseURL + "deleteContact", { id });
    };
}

// function PhoneBookService() {
//     this.baseURL = "/api/";
//
//     this.getContacts = function (term) {
//         return get(this.baseURL + "getContacts", {term: term});
//     };
//
//     this.addContact = function (contact) {
//         return post(this.baseURL + "addContact", {contact: contact});
//     };
//
//     this.deleteContact = function (id) {
//         return post(this.baseURL + "deleteContact", {id: id});
//     };
// }

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

    created() {
        this.loadContacts();
    },

    methods: {
        loadContacts() {
            this.service.getContacts(this.term)
                .done(response => this.contacts = response)
                .fail(() => alert("Request failed"));
        },

        clearSearch() {
            this.term = "";
            this.loadContacts();
        },

        checkFields() {
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
                const phoneNumberInt = parseInt(this.phoneNumber.toString(), 10);

                if (isNaN(phoneNumberInt)) {
                    this.errors.push('Phone number must contain only digits');
                }
            }

            return !this.errors.length;
        },

        addContact() {
            if (!this.checkFields()) {
                return;
            }

            const contact = {
                firstName: this.firstName,
                lastName: this.lastName,
                phoneNumber: this.phoneNumber
            }

            this.service.addContact(contact).done(response => {
                if (!response.success) {
                    alert(response.message);
                    return;
                }

                this.firstName = "";
                this.lastName = "";
                this.phoneNumber = "";

                this.loadContacts();
            }).fail(() => alert("Request failed"));
        },

        deleteContact(contact) {
            this.service.deleteContact(contact.id).done(response => {
                if (!response.success) {
                    alert(response.message);
                    return;
                }

                this.loadContacts();
            }).fail(() => alert("Request failed"));
        }
    }
});