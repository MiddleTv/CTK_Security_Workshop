var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/', function(req, res) {
    res.send("todo");
});

router.put('/:token', function(req, res) {
    res.send("todo");
});

router.delete('/', function(req, res) {
    res.send("todo")
});

module.exports = router;
