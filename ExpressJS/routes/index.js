var express = require('express');
var router = express.Router();

var contacts = []; // { id, firstName, lastName, phoneNumber }
var newId = 1;

// /api/getContacts?term=text
router.get("/api/getContacts", function (req, res) {
    var term = (req.query.term || "").toUpperCase();

    var result = term.length === 0
        ? contacts
        : contacts.filter(function (c) {
            return c.firstName.toUpperCase().indexOf(term) >= 0
                || c.lastName.toUpperCase().indexOf(term) >= 0
                || c.phoneNumber.toUpperCase().indexOf(term) >= 0;
        });

    res.send(result);
});

// { id: 1 }
router.post("/api/deleteContact", function (req, res) {
    var id = req.body.id;

    contacts = contacts.filter(function (c) {
        return c.id !== id;
    });

    res.send({
        success: true,
        message: null
    });
});

// { contact: { firstName, lastName, phoneNumber } }
router.post("/api/addContact", function (req, res) {
    var contact = req.body.contact;

    if (!contact) {
        res.send({
            success: false,
            message: "Incorrect data format"
        });

        return;
    }

    if (!contact.firstName) {
        res.send({
            success: false,
            message: "First name is required"
        });

        return;
    }

    if (!contact.lastName) {
        res.send({
            success: false,
            message: "Last name is required"
        });

        return;
    }

    if (!contact.phoneNumber) {
        res.send({
            success: false,
            message: "Phone number is required"
        });

        return;
    }

    if (contacts.some(function (c) {
        return c.phoneNumber === contact.phoneNumber;
    })) {
        res.send({
            success: false,
            message: "Phone number already exists in the Phone book"
        });

        return;
    }

    contact.id = newId;
    newId++;

    contacts.push(contact);

    res.send({
        success: true,
        message: null
    });
});

/* GET home page. */
router.get("/", function (req, res) {
    res.render("index", {title: "ExpressJS - PhoneBook"});
});

module.exports = router;
