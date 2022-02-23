const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const connection = require('./db');
const session = require('express-session');

const router = express.Router();

router.get('/projects', function(req, res) {

    if (!req.session.loggedin) {
        res.render(rootDir + '/views' + "/error.ejs", {
            error: "You are not logged in. <br><a href='/signin'>Log In</a>"
        })
    } else {
        connection.query('SELECT * FROM projects', function(error, results, fields) {
            res.render(rootDir + '/views' + "/viewProjects.ejs", {
                data: results
            })
        })
    }

})

router.get('/submit', function(req, res) {

    if (!req.session.loggedin) {
        res.render(rootDir + '/views' + "/error.ejs", {
            error: "You are not logged in. <br><a href='/signin'>Log In</a>"
        })
    } else {
        res.render(rootDir + '/views' + "/submitProject.ejs", {
            error: ""
        })
    }

})

router.post('/submit', function(req, res) {

    var name = req.body.pname;
    var des = req.body.pdes;
    var fund = req.body.fund;

    if (name && des && fund) {
        connection.query('INSERT INTO projects(user, projectName, projectSummary, projectFund) VALUES (?,?,?,?)', [req.session.username, name, des, fund], function(error, results, fields) {
            if (error) throw error;
            else {
                console.log("Support Query Added!!");
                res.render(rootDir + '/views' + "/submitProject.ejs", {
                    error: "Project Added!!"
                })
            }
        });
    } else {
        res.render(rootDir + '/views' + "/submitProject.ejs", {
            error: "Fill all the details!!"
        })
    }
})

module.exports = router;