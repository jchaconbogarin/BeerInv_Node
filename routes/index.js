var express = require('express');
var router = express.Router();
const breweryController = require('../controllers').brewery;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/breweries', breweryController.list);
router.get('/api/breweries/:id', breweryController.getById);
router.post('/api/breweries', breweryController.add);
router.put('/api/breweries/:id', breweryController.update);
router.delete('/api/breweries/:id', breweryController.delete);

module.exports = router;
