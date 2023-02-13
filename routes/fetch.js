const express = require('express');
const router = express.Router();
const {fetch_mrd,fetch_civil,fetch_coding,fetch_electrical,fetch_gaming,fetch_robotics} = require('../controllers/fetch');

router.route('/').get(fetch_mrd);
router.route('/rfetchCo').get(fetch_coding);
router.route('/rfetchCi').get(fetch_civil);
router.route('/rfetchEle').get(fetch_electrical);
router.route('/rfetchRo').get(fetch_robotics);
router.route('/rfetchGm').get(fetch_gaming);
module.exports = router;