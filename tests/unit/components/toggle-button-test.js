import {
  moduleForComponent,
  test
} from 'ember-qunit';
import {skip} from 'qunit';

moduleForComponent('toggle-button', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

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

skip('button changes when color when is-on is changed', function(assert) {
  var component = this.subject();
  this.render();

  assert.equal(component.get('colorClass'), 'btn-danger', "default value is btn-danger - aka red");
  assert.ok(this.$().hasClass('btn-danger'), 'button has btn-danger class');

  component.set('is-on', true);

  assert.equal(component.get('colorClass'), 'btn-primary', "btn-primary is green!");
  assert.ok(this.$().hasClass('btn-primary'), 'when on the component has btn-primary class');
});

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
