require('array.prototype.find');
var bodyParser = require('body-parser');

module.exports = function(app) {
  var express = require('express');
  var router = express.Router();
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));

  router.get('/', function(req, res) {
    setTimeout(function(){
      res.send({
        'products': products
      });
    }, 750);
  });

  router.post('/', function(req, res) {
    res.send(req.body).status(201).end();
  });

  router.get('/:id', function(req, res) {
    var id = req.params.id;
    var product = products.find(function(product){
      return product.id === parseInt(id, 10);
    });
    if (product) {
      res.send({
        'product': product
      });
    }
    res.status(404).end();
  });

  router.put('/:id', function(req, res) {
    res.send({
      'products': {
        id: req.params.id
      }
    });
  });

  router.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/products', router);
};

var products = [
  { id: 1, title: 'ShamWow', price: 12.99, description: "A towel"},
  { id: 2, title: 'ThighMaster', price: 29.99, description: "Spring you squeeze with your thighs"},
  { id: 3, title: 'Sweatin’ to the Oldies', price: 34.99, description: "Workout video"},
  { id: 4, title: 'Snuggie', price: 29.99, description: "A blanket"},
  { id: 5, title: 'Ped Egg', price: 9.99, description: "Foot massager"},
  { id: 6, title: 'Showtime Rotisserie', price: 69.99, description: "Rotisserie oven"},
  { id: 7, title: 'Bowflex', price: 1299.99, description: "Gym equipment"},
  { id: 8, title: 'George Foreman Grill', price: 79.99, description: "Gril"},
  { id: 9, title: 'Total Gym', price: 1599.99, description: "Gym equipment"},
  { id: 10, title: 'P90X', price: 49.99, description: "Exercise balls?"},
  { id: 11, title: 'Proactive', price: 119.99, description: "Skin care product"}
];
