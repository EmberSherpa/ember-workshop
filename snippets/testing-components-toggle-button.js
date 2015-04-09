import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [':btn', 'colorClass'],
  colorClass: Ember.computed('is-on', function(){
    return this.get('is-on') ? 'btn-primary' : 'btn-danger';
  }),
  click: function() {
    var next = !this.get('is-on');
    if (this.get('on-click')) {
      this.sendAction('on-click', next);
      return;
    }
    this.set('is-on', next);
  }
});
