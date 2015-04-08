test('reminder is called', function(assert){
  assert.expect(3);
  var done = assert.async();

  service = this.subject({
    remind: function(reminder) {
      assert.ok(true, "reminder was called");
      assert.equal(reminder, 'Foo', "remind is called with Foo reminder");
      done();
    }
  });

  service.add('Foo', 100);
  assert.equal(service.get('timers.length'), 1, 'expected the service to have 1 timer');
});
