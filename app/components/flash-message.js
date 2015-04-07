import Ember from 'ember';

export default Ember.Component.extend({
  type: null,
  classNameBindings: [':flash', 'typeClass'],
  typeClass: Ember.computed('type', function(){
    var className;
    var type = this.get('type');
    if (!Ember.isNone(type)) {
      className = `flash-${type}`;
    }
    return className;
  })
});
