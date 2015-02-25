import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  title: function(tokens) {
    return (tokens.length ? tokens.join(' | ') + ' | ' : '') + 'Antiquarium';
  },

  actions: {
    sessionAuthenticationSucceeded: function() {
      location.reload();
    },

    loading: function() {
      Ember.$('[data-pages-progress="circle"]').each(function() {
        var $progress = $(this);
        $progress.circularProgress($progress.data());
      });

      return true;
    }
  },

  renderTemplate: function() {
    if (this.get('session').get('isAuthenticated')) {
      this.render('application');
    }
  }
});
