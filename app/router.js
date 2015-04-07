import Ember from 'ember';
import config from './config/environment';
import sections from './sections';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  sections.forEach((section)=>{
    if (section.routes) {
      this.route(section.route, function(){
        section.routes.forEach((route)=>{
          this.route(route.route);
        });
      });
    } else {
      this.route(section.route);
    }
  });
});
