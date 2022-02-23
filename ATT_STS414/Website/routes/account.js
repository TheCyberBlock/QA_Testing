const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const connection = require('./db')

const router = express.Router();

router.get('/account', function (req, res) {

    if (!req.session.loggedin) {
        res.render(rootDir + '/views' + "/error.ejs", {
            error: "You are not logged in. <br><a href='/signin'>Log In</a>"
        })
    } else {
        connection.query('SELECT * FROM users LEFT JOIN projects ON users.uname=projects.user where users.uname=?', [req.session.username], function (error, results, fields) {
            res.render(rootDir + '/views' + "/account.ejs", {
                data: results,
                error: ''
            })
        }) 
    }   

})

router.post('/account', function (req,res) {
    
    var projectID = req.body.del;

    if(projectID) {
        connection.query('SELECT * FROM users LEFT JOIN projects ON users.uname=projects.user where users.uname=?', [req.session.username], function (error, results1, fields) {
            connection.query('DELETE FROM projects WHERE projectID=? AND user=?', [projectID, req.session.username], function (error, results2, fields) {
                if(results2.affectedRows<=0) {
                    res.render(rootDir + '/views' + "/account.ejs", {
                        data: results1,
                        error: 'Not your project OR project does not exists!!'
                    })
                } else {
                    connection.query('SELECT * FROM users LEFT JOIN projects ON users.uname=projects.user where users.uname=?', [req.session.username], function (error, results, fields) {
                        res.render(rootDir + '/views' + "/account.ejs", {
                            data: results,
                            error: 'Project Deleted'
                        })
                    })
                }
            })
        }) 
    } else {
        connection.query('SELECT * FROM users LEFT JOIN projects ON users.uname=projects.user where users.uname=?', [req.session.username], function (error, results, fields) {
            res.render(rootDir + '/views' + "/account.ejs", {
                data: results,
                error: 'No project ID entered'
            })
        }) 
    }

})

module.exports = router;