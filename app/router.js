import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artifacts');
  this.route('people');
  this.route('places');
  this.route('sources');
});

export default Router;
