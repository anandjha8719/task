const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin_controller');

router.get('/sign-in', adminController.signIn);
// router.get('/sign-out', usersController.destroySession);

router.post('/create-session', adminController.createSession);
router.get('/sort', adminController.sort);

module.exports = router;