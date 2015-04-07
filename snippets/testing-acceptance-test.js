import Ember from 'ember';
import {
  module,
  test
  } from 'qunit';
import startApp from '../helpers/start-app';

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
