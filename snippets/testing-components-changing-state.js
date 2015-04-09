test('button changes when color when is-on is changed', function(assert) {
  var component = this.subject();
  this.render();

  assert.equal(component.get('colorClass'), 'btn-danger', "default value is btn-danger - aka red");
  assert.ok(this.$().hasClass('btn-danger'), 'button has btn-danger class');

  component.set('is-on', true);

  assert.equal(component.get('colorClass'), 'btn-primary', "btn-primary is green!");
  assert.ok(this.$().hasClass('btn-primary'), 'when on the component has btn-primary class');
});
