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


  // Source
  kind:        DS.attr('string'),
  authors:     DS.attr('string'),
  dateCreated: DS.attr('date'),
  attribution: DS.attr('string'),
  identifier:  DS.attr('string'),
  totalPages:  DS.attr('number'),
  image:       DS.attr('object'),


  // Associations
  pages:       DS.hasMany('page', { async: true })

});
