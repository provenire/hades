import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('source', params.source_id);
  }
});
