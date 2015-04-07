import Ember from 'ember';
import sections from '../sections';

export default Ember.Route.extend({
  model() {
    return sections;
  }
});
