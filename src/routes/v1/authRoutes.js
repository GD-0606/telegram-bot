const express = require('express');
const router = express.Router();
const {login} = require('../../controllers/auth.controller');

// Define your CRUD routes
router.post('/login',login);

module.exports = router;
