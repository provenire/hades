import Ember from 'ember';

export default Ember.ObjectController.extend({
  hasAffiliations: function() {
    return (this.get('affiliations').length > 0);
  }.property('affiliations.@each')

});
