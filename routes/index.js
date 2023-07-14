// gettting dependencies
const express = require('express');

// getting router instance
const router = express.Router();

// user routes
router.use('/user',require('./userRoute'));

module.exports = router;