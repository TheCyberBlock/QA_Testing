const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const connection = require('./db')

const router = express.Router();

router.get('/signin', function(req, res) {

    if (req.session.loggedin) {
        res.render(rootDir + '/views' + "/error.ejs", {
            error: "Already logged in.<br> <a href='/'>Home Page</a>"
        })
    } else {
        res.render(rootDir + '/views' + "/signin.ejs", {
            error: ""
        })
    }

})

router.post('/userSignin', function(req, res) {

    var username = req.body.uname;
    var password = req.body.pwd;
    if (username && password) {
        connection.query('SELECT * FROM users WHERE uname = ? AND pass = ?', [username, password], function(error, results, fields) {
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                res.redirect('/');
            } else {
                res.render(rootDir + '/views' + "/signin.ejs", {
                    error: "Incorrect Username or Password!!"
                })
            }
            res.end();
        });
    } else {
        res.render(rootDir + '/views' + "/signin.ejs", {
            error: "Enter both Username and Password!!"
        })
        res.end();
    }

})

router.get('/signup', function(req, res) {

    if (req.session.loggedin) {
        res.render(rootDir + '/views' + "/error.ejs", {
            error: "Already logged in.<br> <a href='/'>Home Page</a>"
        })
    } else {
        res.render(rootDir + '/views' + "/signup.ejs", {
            error: ""
        })
    }

})

router.post('/userSignup', function(req, res) {

    var uname = req.body.uname;
    var pass = req.body.pwd;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var city = req.body.city;
    var phone = req.body.phone;
    var email = req.body.email;
    var pwd = req.body.pwd;
    var repwd = req.body.repwd;

    if (fname && lname && phone && city && email && uname && pass && repwd) {
        if (pwd == repwd) {
            connection.query('SELECT * FROM users WHERE uname = ? OR email = ?', [uname, email], function(error, results, fields) {
                if (results.length == 0) {
                    connection.query('INSERT INTO users(fname, lname, number, city, uname, email, pass) VALUES (?,?,?,?,?,?,?)', [fname, lname, phone, city, uname, email, pass], function(error, results, fields) {
                        if (error) throw error;
                        else {
                            console.log("User Added!!");
                            req.session.loggedin = true;
                            req.session.username = uname;
                            res.redirect('/');
                        }
                    });
                } else {
                    res.render(rootDir + '/views' + "/signup.ejs", {
                        error: "User with that Username or Email alredy exists!!!"
                    })
                }
            });
        } else {
            res.render(rootDir + '/views' + "/signup.ejs", {
                error: "Passwords do not match!!"
            })
        }
    } else {
        res.render(rootDir + '/views' + "/signup.ejs", {
            error: "Please fill out the complete form!!"
        })
    }

})

router.get('/logout', function(req, res) {

    if (!req.session.loggedin) {
        res.render(rootDir + '/views' + "/error.ejs", {
            error: "You are not logged in.<br> <a href='/signin'>Sign In</a>"
        })
    } else {
        req.session.loggedin = false;
        res.redirect('/')
    }

})

module.exports = router;