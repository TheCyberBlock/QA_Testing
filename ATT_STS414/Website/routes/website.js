const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const connection = require('./db')

const router = express.Router();

router.get('/', function(req, res) {

    if (!req.session.loggedin) {
        res.render(rootDir + '/views' + "/landingPage.ejs");
    } else {
        res.render(rootDir + '/views' + "/home.ejs");
    }

})

router.get('/about', function(req, res) {

    res.render(rootDir + '/views' + "/about.ejs");

})

router.get('/contact', function(req, res) {

    res.render(rootDir + '/views' + "/contact.ejs", {
        error: ""
    });

})

router.post('/contact', function(req, res) {

    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var projectName = req.body.project;
    var message = req.body.message;

    if (fname && lname && email && projectName && message) {
        connection.query('INSERT INTO support(fname, lname, email, projectName, queries) VALUES (?,?,?,?,?)', [fname, lname, email, projectName, message], function(error, results, fields) {
            if (error) throw error;
            else {
                console.log("Support Query Added!!");
                res.render(rootDir + '/views' + "/contact.ejs", {
                    error: "Query Added!!"
                })
            }
        });
    } else {
        res.render(rootDir + '/views' + "/contact.ejs", {
            error: "Fill all the details!!"
        })
    }
})

module.exports = router;