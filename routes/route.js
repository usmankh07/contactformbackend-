const express = require('express');
const router = express.Router();
const postRequest = require('../controllers/controller');

router.post('/', postRequest);


module.exports = router;