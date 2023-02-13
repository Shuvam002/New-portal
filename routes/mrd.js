const express = require('express');
const router = express.Router();
const {get_mrd,post_mrd} = require('../controllers/mrd');
router.route('/').get(get_mrd);
router.route('/').post(post_mrd);



module.exports = router;