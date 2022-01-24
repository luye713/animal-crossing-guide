var express = require('express');
var router = express.Router();
const passport = require('passport');

const villagersCtrl = require('../controllers/villagers')



/* GET home page. */
router.get('/', villagersCtrl.index);
router.get('/:id', villagersCtrl.show)
router.get('/:id/:id', villagersCtrl.showOne)




  
  router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));
    
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/users',
      failureRedirect : '/users'
    }
  ));

  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/users');
  });

module.exports = router;