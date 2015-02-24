import Ember from 'ember';

export default Ember.Component.extend({

  uuidHref: function() {
    return '#' + this.get('event.uuid');
  }.property('event.uuid')

});
