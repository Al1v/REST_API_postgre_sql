const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller');
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })



router.post('/user', jsonParser, userController.createUser);
router.get('/user', userController.getUsers);
router.get('/user/:id',  userController.getOneUser);
router.put('/user',  userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;