import Ember from 'ember';
import {
  module,
  test,
  skip
  } from 'qunit';
import startApp from 'ember-workshop/tests/helpers/start-app';
import Pretender from 'pretender';

var application, server;

module('Acceptance: TestingMocking', {
  beforeEach: function() {
    server = new Pretender();
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    server.shutdown();
  }
});

test('retrieves data and shows it in a list', function(assert){

  server.get('/api/products', function() {
    return [200, {"Content-Type": "application/json"}, JSON.stringify({
      products: [
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
      ]
    })];
  });

  visit('/testing/mocking');
  andThen(function(){
    assert.equal(find('.product-item').length, 11, "displaying 11 items.");
    assert.equal(find('.product-item:eq(0)').text(), 'ShamWow', "first item is ShamWow");
    assert.equal(find('.product-item:eq(3)').text(), 'Snuggie', "fourth item is Snuggie");
  });
});
