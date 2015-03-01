import Ember   from 'ember';
import Session from 'simple-auth/session';
import ENV     from 'hades/config/environment';

export function initialize(container) {
  Session.reopen({
      setCurrentUser: function() {
        var self = this;
        var url = ENV.APP.apiBase + '/users/me';
        Ember.$.getJSON(url).then(function(me) {
          return container.lookup("store:main").find('user', me.user.id).then(function(user) {
            self.set("currentUser", user);
          });
        });
      }.observes('isAuthenticated')
    });
}

export default {
  name: 'current-user',
  before: 'simple-auth',
  initialize: initialize
};
