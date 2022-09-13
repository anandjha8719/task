const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/sign-in', usersController.signIn);
// router.get('/sign-out', usersController.destroySession);

router.post('/create-session', usersController.createSession);
router.post('/select', usersController.select)

module.exports = router;