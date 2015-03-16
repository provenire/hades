import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('not-found', { into: 'application' });
  }
});
