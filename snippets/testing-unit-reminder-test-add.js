test('adding a reminder adds a timer to reminders', function(assert){
  service = this.subject();
  assert.equal(service.get('timers.length'), 0, "reminders array is empty in the beginning");

  service.add('say hello!');
  assert.equal(service.get('timers.length'), 1, "one reminder was added");
});
