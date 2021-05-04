var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 4000;

const user_controller = require('./controllers/user_controller');
const db_controller = require('./controllers/db_controller');

var app = express();
// Parse requests of content-type 'application/json'
app.use(bodyParser.json());

app.use('/api/user', user_controller);
app.use('/api/todo', db_controller);

app.listen(port, () => {
 console.log("Server running on port 4000");
});

app.get('/', function(req, res) {
    res.send("this is front page");
});

app.get('/api', function(req, res) {
    res.send("ello dis is kek");
});

module.exports = app;