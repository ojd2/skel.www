/***********************************************************


 Main Router
 -----------
 
    Handles external controllers & routes. 

	In the code at you can see router.get('/', 
	which is where the router looks for a get 
	request on the desired page URL path, which 
	is just '/'. The anonymous function that 
	runs the code is really the controller. 
	This is a very basic example with no 
	application code to speak of. So and are 
	the pieces we want to separate here. 


***********************************************************/

// Declarations:
var express = require('express');
var router = express.Router();

// Require External Controllers:
var indexController = require('../controllers/indexController');
var aboutController = require('../controllers/aboutController');

/* GET home page via Controller */
router.get('/', indexController.indexCtrl);
/* GET about page via Controller */
router.get('/about', aboutController.aboutCtrl);


// Express exports routes:
module.exports = router;
