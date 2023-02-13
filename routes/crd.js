const express = require('express');
const crouter = express.Router();
const {getCrd,updateCrd} = require('../controllers/crd');
crouter.route('/').get(getCrd);
crouter.route('/').patch(updateCrd);



module.exports = crouter;