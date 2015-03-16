import Ember  from 'ember';
import { moment } from 'ember-moment/computed';

export default Ember.ObjectController.extend({
  startYear: moment('startDate', 'YYYY'),
  endYear:   moment('endDate', 'YYYY'),

  year: function() {
    var start = this.get('startYear') || 'Unknown';
    var end   = this.get('endYear')   || 'Unknown';
    return start + ' - ' + end;
  }.property('startYear', 'endYear')

});
