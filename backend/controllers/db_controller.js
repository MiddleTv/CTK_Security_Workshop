var express = require('express');
var router = express.Router();
const { v4: uuidv4 }= require('uuid');
const user_controller = require('./user_controller');


router.get('/:token', function(req, res) {
    const mUser = findUser(req.params.token);
    if (mUser !== undefined) {
        res.json({'todo': mUser.todo});
    } else {
        res.status(401).send();
    }
});

router.put('/:token', function(req, res) {
    const mUser = findUser(req.params.token);
    console.log("add task - token: " + req.params.token);
    if (mUser !== undefined) {
        console.log("Not undefined");
        var task = new Object();
        task._id = uuidv4();
        task.description = req.body["task"];
        task.done = false;
        console.log(task);
        mUser.todo.push(task);
        res.status(200).send("You gucci");
    } else {
        res.status(401).send("Unauthorized");
    }
});

router.delete('/:userToken/:todoToken', function(req, res) {
    const mUser = findUser(req.params.userToken);
    if (mUser !== undefined) {
        const todoItem = mUser.todo.find(i => i._id === req.params.todoToken)
        console.log("all good so far");
        res.send("ok")
    } else {
        res.status(401).send("Unauthorized");
    }
});

module.exports = router;

function findUser(token) {
    const mUser = user_controller.userAccounts.find(user => user._id === token);
    return mUser;
}