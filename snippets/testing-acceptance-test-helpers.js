test('visiting /testing/acceptance', function(assert) {

  // Asynchronous Helpers
  visit('/testing/acceptance'); // go to this url in the app

  click('[href="/testing/unit]"'); // click on element with href="/testing/unit"

  fillIn('.username-input', 'bob'); // enter username into field

  keyEvent('.application-view', 'keypress', 27 /* esc */); // trigger keypress even on element matching .application-view

  triggerEvent('.password-input', 'blur'); // trigger event on element matching

  andThen(function() { // then trigger this code
    // synchronous helpers - gotta happen inside of andThen
    assert.equal(currentURL(), '/testing/acceptance'); // get currentURL() cause you can't use window.location

    assert.equal(currentRouteName(), 'testing.acceptance'); // get currentRouteName() cause sometimes you need that

    assert.equal(currentPath(), 'testing.acceptance'); // includes all parent routes that were entered

    assert.ok(find("h2:contains('Acceptance Testing')").length === 1); // jQuery selector to find element in app
  });

  return pauseTest(); // pause test so you can see what's going on
});
