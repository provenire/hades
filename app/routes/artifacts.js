import Ember    from 'ember';
import Auth     from 'simple-auth/mixins/authenticated-route-mixin';
import Paginate from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(Auth, Paginate, {
  titleToken: 'Artifacts',

  perPage: 10,

  model: function(params) {
    return this.findPaged('artifact', params);
  }

});
