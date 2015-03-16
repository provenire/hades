import Ember from 'ember';

export default Ember.ObjectController.extend({
  firstArtifact: function() {
    return this.get('artifacts').get('firstObject');
  }.property('artifacts.@each.firstObject')
});
