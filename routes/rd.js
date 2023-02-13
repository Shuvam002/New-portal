const express = require('express');
const router = express.Router();
const {get_rd,post_rd} = require('../controllers/rd');
router.route('/').get(get_rd);
router.route('/').post(post_rd);



module.exports = router;