const express = require('express');
const crouter = express.Router();
const getCrd = require('../controllers/crd');
crouter.route('/').get(getCrd);
// crouter.route('/').get(post_crd);



module.exports = crouter;