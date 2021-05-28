/*
* Project file: index.js
* Project folder: FinalProject
* Description: @ ChessTour1/description.txt
* This file Creates and Starts Server on port 8088
* For: CIS-228 - Fall Semester - Final Project
* Last edited: 12/10/2020 by S.Jovanovic
*/
const http = require('http');
const express = require("express");
const path = require('path');

//use the application off of express.
const app = express();
app.use(express.json());
app.use(express.static('chessTour1'));


app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/chessTour1/index.html'));
});

const server = http.createServer(app);
const port = 8088;
server.listen(port);
console.log('Server listening on port' + port);

//define the route for "/"
app.get("/", function (request, response) {
    //show this file when the "/" is requested
    response.sendFile(__dirname + "/chessTour1/index.html");
});

