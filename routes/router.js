const express = require('express');
const router = express.Router();
const UserRoutes = require('./userRouter');
router.use('/user', UserRoutes);
module.exports = router