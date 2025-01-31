const express = require('express');
const router = express.Router();
const getformpage = require('../app/controllers/auth')

router.route('/').get(getformpage);

module.exports = router;