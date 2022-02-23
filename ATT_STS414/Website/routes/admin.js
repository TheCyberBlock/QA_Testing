const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
var connection = require('./db')

const router = express.Router();

var users = "";
var projects = "";

router.get('/admin', function(req, res) {

    if (!req.session.admin) {
        res.render(rootDir + '/views' + "/adm_login.ejs", {
            error: ""
        })
    } else {
        connection.query('SELECT * FROM users', [req.body.uname, req.body.pwd], function(error, users, fields) {
            connection.query('SELECT * FROM projects', [req.body.uname, req.body.pwd], function(error, projects, fields) {
                res.render(rootDir + '/views' + "/adm_page.ejs", {
                    users: users,
                    projects: projects
                })
            })
        })
    }

})

router.post('/admin', function(req, res) {

    if (req.body.uname && req.body.pwd) {
        connection.query('SELECT * FROM admins where uname = ? and pass = ?', [req.body.uname, req.body.pwd], function(error, results, fields) {
            if(results.length>0) {
                req.session.admin = true;
                req.session.username = req.body.uname;
                res.redirect('/admin');
            } else {
                res.render(rootDir + '/views' + "/adm_login.ejs", {
                    error: "Username or password is wrong !!"
                })
            }
        })
    } else {
        res.render(rootDir + '/views' + "/adm_login.ejs", {
            error: "Fill the details !!"
        })
    }

})

router.get('/admin/projects', function(req, res) {

    if (req.session.admin) {
        connection.query('SELECT * FROM projects', function(error, results, fields) {
            res.render(rootDir + '/views' + "/adm_projects.ejs", {
                projects: results,
                projectError: ''
            })
        })
    } else {
        res.redirect('/admin')
    }

})

router.post('/admin/projects', function(req, res) {

    if(req.body.delProj) {
        connection.query('SELECT * FROM projects', function (error, projects, fields) {
            connection.query('DELETE FROM projects WHERE projectID=?', [req.body.delProj], function (error, result, fields) {
                if(result.affectedRows<=0) {
                    res.render(rootDir + '/views' + "/adm_projects.ejs", {
                        projects: projects,
                        projectError: 'Project does not exist !!'
                    })
                } else {
                    connection.query('SELECT * FROM projects', function(error, results, fields) {
                        res.render(rootDir + '/views' + "/adm_projects.ejs", {
                            projects: results,
                            projectError: 'Project Deleted !!'
                        })
                    })
                }
            })
        }) 
    } else {
        connection.query('SELECT * FROM projects', function(error, results, fields) {
            res.render(rootDir + '/views' + "/adm_projects.ejs", {
                projects: results,
                projectError: 'Please enter the Project ID !!'
            })
        })
    }

})

router.get('/admin/users', function(req, res) {

    if (req.session.admin) {
        connection.query('SELECT * FROM users', function(error, results, fields) {
            res.render(rootDir + '/views' + "/adm_users.ejs", {
                users: results,
                userError: ''
            })
        })
    } else {
        res.redirect('/admin')
    }

})

router.post('/admin/users', function(req, res) {

    if(req.body.delUser) {
        connection.query('SELECT * FROM users', function (error, users, fields) {
            connection.query('DELETE FROM users WHERE id=?', [req.body.delUser], function (error, result, fields) {
                if(result.affectedRows<=0) {
                    res.render(rootDir + '/views' + "/adm_users.ejs", {
                        users: users,
                        userError: 'User does not exist !!'
                    })
                } else {
                    connection.query('SELECT * FROM users', function(error, results, fields) {
                        res.render(rootDir + '/views' + "/adm_users.ejs", {
                            users: results,
                            userError: 'User Deleted !!'
                        })
                    })
                }
            })
        }) 
    } else {
        connection.query('SELECT * FROM users', function(error, results, fields) {
            res.render(rootDir + '/views' + "/adm_users.ejs", {
                users: results,
                userError: 'Please enter the user ID !!'
            })
        })
    }

})

router.get('/admin/fund', function(req, res) {

    if (!req.session.admin) {
        connection.query('SELECT * FROM projects where isFunded = 1', function(error, results, fields) {
            connection.query('SELECT * FROM projects where isFunded = 0', function(error, results2, fields) {
                res.render(rootDir + '/views' + "/adm_fund.ejs", {
                    projects: results,
                    projects2: results2,
                    fundError: ''
                })
            })
        })
    } else {
        res.redirect('/admin')
    }

})

router.post('/admin/fund', function(req, res) {
    
    if(req.body.fundProj) {
        connection.query('SELECT * FROM projects where isFunded = 1', function(error, results, fields) {
            connection.query('SELECT * FROM projects where isFunded = 0', function(error, results2, fields) {
                connection.query('SELECT * FROM projects where projectID = ?', [req.body.fundProj], function(error, results3, fields) {
                   if(results3.length>0) {
                        if(results3[0].isFunded) {
                            res.render(rootDir + '/views' + "/adm_fund.ejs", {
                                projects: results,
                                projects2: results2,
                                fundError: 'Project is already Funded !!'
                            })
                        } else {
                            connection.query('UPDATE projects set isFunded = 1 where projectID = ?', [req.body.fundProj], function(error, results4, fields) {
                                connection.query('SELECT * FROM projects where isFunded = 1', function(error, res1, fields) {
                                    connection.query('SELECT * FROM projects where isFunded = 0', function(error, res2, fields) {
                                        res.render(rootDir + '/views' + "/adm_fund.ejs", {
                                            projects: res1,
                                            projects2: res2,
                                            fundError: 'Enter project ID !!'
                                        })
                                    })
                                })
                            })
                        }
                   } else {
                        res.render(rootDir + '/views' + "/adm_fund.ejs", {
                            projects: results,
                            projects2: results2,
                            fundError: 'Project does not exists !!'
                        })
                   }
                })
            })     
        })
    } else {
        connection.query('SELECT * FROM projects where isFunded = 1', function(error, results, fields) {
            connection.query('SELECT * FROM projects where isFunded = 0', function(error, results2, fields) {
                res.render(rootDir + '/views' + "/adm_fund.ejs", {
                    projects: results,
                    projects2: results2,
                    fundError: 'Enter project ID !!'
                })
            })
        })
    }
    
})

router.get('/admin/logout', function(req, res) {
    req.session.admin = false;
    res.redirect('/admin');
})

module.exports = router;