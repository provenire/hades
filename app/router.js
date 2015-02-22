import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // Sessions
  this.route('login');


  // User
  this.route('dashboard');


  // Artifacts
  this.route('artifacts');
  this.route('artifact', { path: '/artifacts/:artifact_id' });


  // People
  this.route('people');
  this.route('person', { path: '/people/:person_id' });


  // Places
  this.route('places');
  this.route('place', { path: '/places/:place_id' });


  // Sources
  this.route('sources');
  this.route('source', { path: '/sources/:source_id' });

});

export default Router;
