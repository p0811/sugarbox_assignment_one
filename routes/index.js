const express = require('express');
const router = express.Router();
const suggerboxUser = require('../controller/suggerBoxUsers')


/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });
/**
 *  routes for creating user
 */

router.post('/user', suggerboxUser.userCreate);



module.exports = router;