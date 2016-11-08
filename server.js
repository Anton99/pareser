var express = require('express');
var app = express();
var parser = require('./app');

var isRunning = false;

var results = [];

app.get('/parse', function (req, res) {
    if(isRunning){
       return;
    }
    isRunning = true;
    parser('texnano', function (res) {
        isRunning = false;
        console.log("DONE");
        results = res;
    })
});

app.get('/get', function (req, res) {
    if(isRunning){
       return;
    }
    res.send(results);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});