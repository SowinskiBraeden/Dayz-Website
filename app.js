var express = require('express')
var path = require('path');
var http = require('http').createServer(express);
var dotenv = require('dotenv');
dotenv.config();

const app = express();

app.set('view engine', 'ejs');

app.use('/static', express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 5000;

const server = app.listen(port, function () {
	console.log('Server started.', server.address());
});

require('./app/routes')(app, server);
