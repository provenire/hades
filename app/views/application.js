import Ember from 'ember';

export default Ember.View.extend({
  initSidebar: function() {
    this.$('[data-pages="sidebar"]').each(function() {
      var $sidebar = $(this);
      $sidebar.sidebar($sidebar.data());
    });
  }.on('didInsertElement')

});
