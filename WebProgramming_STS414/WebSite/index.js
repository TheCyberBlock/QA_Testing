// Modules
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projects');
const accountRoutes = require('./routes/account');
const websiteRoutes = require('./routes/website');
const adminRoutes = require('./routes/admin');

app.use(authRoutes);
app.use(accountRoutes);
app.use(projectRoutes);
app.use(websiteRoutes);
app.use(adminRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

var server = app.listen(8081, function() {
    var port = server.address().port
    console.log("App listening at %s", port)
})