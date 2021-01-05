const express = require('express');
const app = express();
const server = require('http').Server(app);

module.exports = function (app, server) {
    app.get('/', function (req, res) {
        res.render('index');
    });
}
