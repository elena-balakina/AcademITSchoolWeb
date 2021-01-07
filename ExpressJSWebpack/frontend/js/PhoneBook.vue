<template>
    <div class="container">
        <div v-cloak id="app">
            <div class="header">
                <div class="main-picture"></div>
                <h1 class="mb-3">Phone Book</h1>
            </div>

            <h6 class="mb-2">Fill the form to add a new contact:</h6>
            <div class="row no-gutters">
                <div class="col-3 pr-2">
                    <input v-model.trim="firstName" class="form-control mb-2" type="text"
                           placeholder="Enter first name"/>
                </div>
                <div class="col-3 pr-2">
                    <input v-model.trim="lastName" class="form-control mb-2" type="text" placeholder="Enter last name"/>
                </div>
                <div class="col-2 pr-2">
                    <input v-model.trim="phoneNumber" class="form-control mb-2" type="text"
                           placeholder="Enter phone number"/>
                </div>
                <div class="col-lg-auto">
                    <button @click="addContact" class="btn btn-primary mb-2" type="button">Add
                    </button>
                </div>
            </div>

            <div v-if="errors.length">
                <div class="mb-2 text-danger" v-for="error in errors">{{ error }}</div>
            </div>

            <div class="row no-gutters mb-4 form-inline">
                <input class="form-control col-7 pl-2 pr-2 mr-2 mb-2" v-model="term" type="text" placeholder="Search">
                <div class="col-auto">
                    <button @click="loadContacts" class="btn btn-primary col-6 mr-1 mb-2" type="button">Search</button>
                    <button @click="clearSearch" class="btn btn-secondary col-5 mb-2" type="button">Clear</button>
                </div>
            </div>

            <div id="table-content">
                <table id="table" class="table table-inverse">
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone number</th>
                        <th>Delete contact</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(contact, index) in contacts" :key="contact.id">
                        <td> {{ index + 1 }}</td>
                        <td>{{ contact.firstName }}</td>
                        <td>{{ contact.lastName }}</td>
                        <td>{{ contact.phoneNumber }}</td>
                        <td>
                            <button @click="deleteContact(contact)" class="btn btn-danger"
                                    type="button">Delete
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import PhoneBookService from "./phoneBookService";

export default {
    data() {
        return {
            contacts: [], // { id, firstName, lastName, phoneNumber }
            firstName: "",
            lastName: "",
            phoneNumber: "",
            term: "",
            errors: [],
            service: new PhoneBookService()
        }
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
}
</script>