import Ember from 'ember';

export default Ember.ArrayController.extend({

  // Pagination
  queryParams: ['page', 'perPage'],

  pageBinding:       'content.page',
  perPageBinding:    'content.perPage',
  totalPagesBinding: 'content.totalPages',
  totalCountBinding: 'content.totalCount',

  page:    1,
  perPage: 10,


  // Helper
  startEntry: function() {
    return (this.get('page') - 1) * this.get('perPage') + 1;
  }.property('page', 'perPage'),

  endEntry: function() {
    return Math.min(this.get('startEntry') + this.get('perPage') - 1, this.get('totalCount'));
  }.property('startEntry', 'perPage', 'totalCount')

});
