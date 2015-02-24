import Ember from 'ember';

export default Ember.Controller.extend({
  exploreRoute:  Ember.computed.match('currentPath', /artifact|people|person|place|source|event|affiliation/),
  artifactRoute: Ember.computed.match('currentPath', /artifact/),
  personRoute:   Ember.computed.match('currentPath', /people|person/),
  placeRoute:    Ember.computed.match('currentPath', /place/),
  sourceRoute:   Ember.computed.match('currentPath', /source/)

});
