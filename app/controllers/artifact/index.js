import Ember from 'ember';

export default Ember.ObjectController.extend({
  names: function() {
    return this.get('alternateNames').join(', <br/>').htmlSafe();
  }.property('alternateNames.@each')
});
