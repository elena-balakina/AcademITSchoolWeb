import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle";
import Vue from "vue";

import "bootstrap/scss/bootstrap.scss";
import "../scss/style.scss";

import PhoneBook from "./PhoneBook.vue";

new Vue({
    render: createElement => createElement(PhoneBook)
}).$mount('#app');