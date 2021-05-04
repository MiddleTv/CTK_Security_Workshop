var express = require('express');
var router = express.Router();
var userAccounts = [];
const { v4: uuidv4 } = require('uuid');
/**
 * user body
 * {
 *    id: '...',
 *    username: '...',
 *    password: '...',
 *    todo: []
 * }
 */
// USER
router.post('/login', function(req, res) {
    const param = req.body;
    const mUser = userAccounts.find(u => u.username === param["username"]);
    if (mUser !== undefined) {
        if (mUser.password !== param["password"]) {
            res.send("incorrect password");
        } else {
            res.json({"message":"you gucci", "token": mUser._id})
        }
    } else {
        res.send("user not found")
    } 
});

router.post('/create', function(req, res) {
    const param = req.body;
    if (!doesExist(param["username"])){
        var account = new Object();
        account.username = req.body["username"];
        account.password = req.body["password"];
        account._id = uuidv4();
        account.todo = [];
        userAccounts.push(account);
        res.json({"token": account._id})
    } else {
        res.json({"message":"username taken."});
    }
});

router.get('/create', function (req, res) {
    res.json({"message":userAccounts});
});


module.exports = router;
module.exports.userAccounts = userAccounts;

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