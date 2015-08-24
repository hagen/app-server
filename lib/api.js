var express = require('express');
var router = express.Router();

// middleware specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/redshift', function(req, res) {
    debugger;
    require('./api/redshift.js')(req, res);
  });

router.get('/hdb', function(req, res) {
    require('./api/hdb.js')(req, res);
  });

router.get('/sheets', function(req, res) {
    require('./api/sheets.js')(req, res);
  });

module.exports = router;