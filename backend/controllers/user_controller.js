var express = require('express');
var router = express.Router();
var userAccounts = [];
const { v4: uuidv4 }= require('uuid');
/**
 * user body
 * {
 *    id: '...',
 *    username: '...',
 *    password: '...',
 *    todo: []
 * }
 */
router.get('/', function(req, res) {
    res.json({'message': 'ello dis is kek!'});
});

router.post('/login', function(req, res) {
    //TODO
    res.json({"message":"TODO"})
});

router.post('/create', function(req, res) {
    const param = req.body;
    if (!doesExist(req.body["username"])){
        var account = new Object();
        account.username = req.body["username"];
        account.password = req.body["password"];
        account._id = uuidv4();
        account.todo = [];
        userAccounts.push(account);
        res.json({"token": account._id, "accounts": userAccounts})
    } else {
        res.json({"message":"username taken."});
    }
});

router.get('/create', function (req, res) {
    res.json({"message":userAccounts});
});

module.exports = router;

function doesExist(username) {
    var found = false;
    for (userIndex in userAccounts) {
        const user = userAccounts[userIndex];
        if (user.username === username) {
            found = true;
            break;
        }
    }
    return found;
}