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
  this.resource('user', { path: '/users/:user_id' }, function() {
    this.route('edit');
  });
  this.resource('users', function() {});


  // Artifacts
  this.resource('artifact', { path: '/artifacts/:artifact_id' }, function() {});
  this.resource('artifacts', function() {});


  // People
  this.resource('person', { path: '/people/:person_id' }, function() {});
  this.resource('people', function() {});


  // Places
  this.resource('place', { path: '/places/:place_id' }, function() {});
  this.resource('places', function() {});


  // Sources
  this.resource('source', { path: '/sources/:source_id' }, function() {});
  this.resource('sources', function() {});


  // Affiliations
  this.resource('affiliation', { path: '/affiliations/:affiliation_id' }, function() {});


  // Events
  this.resource('event', { path: '/events/:event_id' }, function() {});

});

export default Router;
