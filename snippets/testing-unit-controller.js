import Ember from 'ember';

export default Ember.Controller.extend({
  delay: 1000,
  actions: {
    remind(message, delay) {
      this.remind(message, delay);
    }
  },
  remind(message, delay) {
    if (Ember.isPresent(delay)){
      delay = parseInt(delay, 10);
    }
    if (Ember.isPresent(message)) {
      this.get('reminder').add(message, delay);
    }
  }
});
