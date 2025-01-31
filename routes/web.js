const express = require('express');
const router = express.Router();
const {getformpage, postform} = require('../app/controllers/auth')

router.route('/')
.get(getformpage)
.post(postform);
module.exports = router;