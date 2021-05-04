var express = require('express');
var router = express.Router();
var db = require('../db');


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

router.post('/create', async function(req, resp) {
    const param = req.body;
    const exists = await db.check_exists(req.body["username"]);
    console.log("user exists: " + exists);
    if (!exists){
        var account = new Object();
        account.username = req.body["username"];
        account.password = req.body["password"];
        const result = await db.add_user(account);
        console.log("returned: " + result)
        resp.json(result)
    } else {
        resp.json({"message" : "username taken."});
    }
});

router.get('/create', function (req, res) {
    res.json({"message":userAccounts});
});


module.exports = router;
module.exports.userAccounts = userAccounts;
