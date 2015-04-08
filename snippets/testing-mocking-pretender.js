var server = new Pretender();

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

server.post('/api/products', function(request){
  return [201, {"Content-Type": "application/json"}, request.requestBody];
});
