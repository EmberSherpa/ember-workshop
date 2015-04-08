import Ember from 'ember';

export default Ember.Service.extend({
  timers: Ember.computed(function(){
    return [];
  }),
  add: function(reminder, delay = 1000) {

    var reminderCallback = ()=>{
      // perform the reminder
      this.remind(reminder);
      // remove timer from timers
      this.get('timers').removeObject(timer);
    };

    /**
     * Create a reminder that will execute after {delay} # of milliseconds
     * @see http://emberjs.com/api/classes/Ember.run.html#method_later
     * @type {*} Timer information for use in cancelling, see `run.cancel`.
     */
    var timer = Ember.run.later(this, reminderCallback, [reminder], delay);

    /**
     * push timer into reminders array so we can cancel them if necessary
     */
    this.get('timers').pushObject(timer);

    return timer;
  },
  remind: function(reminder) {
    /**
     * use window alert to remind the user
     */
    window.alert(reminder);
  },
  /**
   * Cancel all future reminders
   */
  cancel: function() {
    this.get('timers').forEach(function(timer){
      Ember.run.cancel(timer);
    });
    this.set('timers', []);
  }
});
