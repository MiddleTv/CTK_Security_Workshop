var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 4000;

var user_controller = require('./controllers/user_controller');

var app = express();
// Parse requests of content-type 'application/json'
app.use(bodyParser.json());

app.use('/api', user_controller);

app.listen(port, () => {
 console.log("Server running on port 4000");
});

app.get('/', function(req, res) {
    res.json({"message": "this is front page"});
});

module.exports = app;