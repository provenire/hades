import DS from 'ember-data';

export default DS.Model.extend({

  // Standard
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),


  // Page
  number:    DS.attr('number'),
  text:      DS.attr('string'),
  image:     DS.attr('string'),


  // Associations
  source:    DS.belongsTo('source')

});
