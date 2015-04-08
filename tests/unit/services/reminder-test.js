import Ember from 'ember';
import {
  moduleFor,
  test
} from 'ember-qunit';
import {skip} from 'qunit';

var service;

moduleFor('service:reminder', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  service = this.subject();
  assert.ok(service);
});

test('adding a reminder adds a timer to reminders', function(assert){
  service = this.subject();
  assert.equal(service.get('timers.length'), 0, "reminders array is empty in the beginning");

  var timer = service.add('say hello!');
  assert.equal(service.get('timers.length'), 1, "one reminder was added");

  Ember.run.cancel(timer);
});

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

test('cancel removes timers from timers array', function(assert){
  var fail = ()=>{ assert.fail(); };
  service = this.subject({
    timers: [
      Ember.run.later(fail, 1000),
      Ember.run.later(fail, 1000)
    ]
  });
  assert.equal(service.get('timers.length'), 2, "there are 2 timers in the beginning");
  service.cancel();
  assert.equal(service.get('timers.length'), 0, "timers array is empty");
});
