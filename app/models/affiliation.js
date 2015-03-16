import DS from 'ember-data';

export default DS.Model.extend({

  // Standard
  uuid:        DS.attr('string'),
  slug:        DS.attr('string'),
  name:        DS.attr('string'),
  description: DS.attr('string'),

  createdAt:   DS.attr('date'),
  updatedAt:   DS.attr('date'),

  excerpt:     DS.attr('string'),


  // Affiliation
  title:       DS.attr('string'),
  startDate:   DS.attr('date'),
  endDate:     DS.attr('date'),
  current:     DS.attr('boolean'),


  // Associations
  person:      DS.belongsTo('person', { async: true }),
  place:       DS.belongsTo('place',  { async: true })

});
