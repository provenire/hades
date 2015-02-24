import Ember from 'ember';
import Auth  from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(Auth, {
  model: function(params) {
    return this.store.find('user', params.user_id);
  }
});
