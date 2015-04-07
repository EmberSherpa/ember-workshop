import Ember from 'ember';

export default Ember.Controller.extend({
  message: null,
  actions: {
    go() {
      this.set('message', 'Great Success!');
    }
  }
});
