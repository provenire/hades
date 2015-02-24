import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {

    /**
     * Update the user's profile
     */
    updateProfile: function() {
      var _this = this;
      this.get('model').save()
      .then(function(user) {
        _this.transitionToRoute('user.edit', user.get('slug'));
        $('body').pgNotification({
          style:    'bar',
          position: 'top',
          type:     'success',
          message:  '<b>Success! </b> Your profile has been updated.'
        }).show();
      })
      .catch(function(error) {
        console.log(error);
        $('body').pgNotification({
          style:    'bar',
          position: 'top',
          type:     'danger',
          message:  '<b>Error updating profile: </b>' + error.responseJSON.errors.join(', ')
        }).show();
      });
    },

    /**
     * Update user's email
     */
    updateEmail: function() {
      $('body').pgNotification({
        style:    'bar',
        position: 'top',
        type:     'danger',
        message:  '<b>Error updating email: </b> Feature not yet implemented.'
      }).show();
    },

    /**
     * Update user password
     */
    updatePassword: function() {
      $('body').pgNotification({
        style:    'bar',
        position: 'top',
        type:     'danger',
        message:  '<b>Error updating password: </b> Feature not yet implemented.'
      }).show();
    }
  }
});
