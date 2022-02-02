// Author: Rushin Barvadia
// Date: 2022-01-27

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home);

/* GET Project page. */
router.get('/projects', indexController.projects);

/* GET About page. */
router.get('/aboutme', indexController.aboutme);


router.get('/contactme', indexController.contactme);



// router.get('/aboutme', function (req, res, next) {
//   res.render('index', { title: 'About Me' });
// });

/*GET Contace Me Page*/
// router.get('/contactme', function (req, res, next) {
//   res.render('index', { title: 'Contact Me' });
// });

module.exports = router;
