import Ember from 'ember';
import {
  module,
  test,
  skip
} from 'qunit';
import startApp from 'ember-workshop/tests/helpers/start-app';

var application;

module('Acceptance: TestingAcceptance', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /testing/acceptance', function(assert) {
  visit('/testing/acceptance');

  andThen(function() {
    assert.equal(currentURL(), '/testing/acceptance');
  });
});

skip('clicking on Go button shows Great Success!', function(assert){
  visit('/testing/acceptance');
  andThen(function(){
    assert.equal(find('.message').text(), '', "message is empty before Go is pressed");
  });
  click('button:contains("Go")');
  andThen(function(){
    assert.equal(find('.message').text(), 'Great Success!', "message was set after Go was pressed");
  });
});
