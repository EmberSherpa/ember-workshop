test('visiting /testing/acceptance', function(assert) {
  visit('/testing/acceptance');

  andThen(function() {
    assert.equal(currentURL(), '/testing/acceptance');
  });
});
