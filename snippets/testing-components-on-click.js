test('on-click is triggered when clicked', function(assert){
  assert.expect(1);

  var target = {
    clickHandler: function() {
      assert.ok(true, "click handler was passed");
    }
  };

  var component = this.subject({
    "on-click": "clickHandler",
    targetObject: target
  });

  this.render();
  this.$().click();
});
