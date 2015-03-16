import Ember  from 'ember';

export default Ember.ObjectController.extend({
  startYear: function() {
    var date = this.get('startDate');
    if (date) {
      return date.getFullYear();
    } else {
      return '';
    }
  }.property('startDate'),

  endYear: function() {
    var date = this.get('endDate');
    if (date) {
      return date.getFullYear();
    } else {
      return '';
    }
  }.property('endDate'),

  year: function() {
    return this.get('startYear') + ' - ' + this.get('endYear');
  }.property('startYear', 'endYear')

});
