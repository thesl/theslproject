var express = require('express');
var router = express.Router();


// Render the home page.
router.get('/', function(req, res) {
  if (!req.user || req.user.status !== 'ENABLED') {
    return res.redirect('/login');
  }
//  res.render('index', {title: 'Home', user: req.user});
});


// Render the dashboard page.
router.get('/dashboard', function (req, res) {
  if (!req.user || req.user.status !== 'ENABLED') {
    return res.redirect('/login');
  }

  res.render('dashboard', {title: 'Dashboard', user: req.user});
});

router.get('/post', function (req, res) {
 // if (!req.user || req.user.status !== 'ENABLED') {
 //   return res.redirect('/login');
 // }

  res.render('post', {title: 'PostSale', user: req.user});
});

router.post('/addPost', function (req,res) {
      var db = req.db;
    db.collection('postList').insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

router.get('/getPosts', function (req, res) {
   var db = req.db;
   db.collection('sellerpost_details').find({creator_id: 1}, function(err, result) {
       if(err === null) {
          result.toArray(function (req, data) {
             console.log(data);
             res.send( { msg : data} );
          });
       } else{
          res.send( { msg: err } );
       }
   });
});
module.exports = router;
