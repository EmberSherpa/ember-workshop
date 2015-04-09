test('button is green when on', function(assert){
  var component = this.subject({
    "is-on": true
  });

  this.render();

  // get value of a property on the component instance
  assert.equal(component.get('colorClass'), 'btn-primary', "btn-primary is green!");

  // check that component's element has btn-primary class
  assert.ok(this.$().hasClass('btn-primary'), 'when on the component has btn-primary class');
});
