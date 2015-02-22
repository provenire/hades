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
  thumbnail:   DS.attr('string'),


  // Person
  gender:      DS.attr('string'),
  nationality: DS.attr('string'),
  dateOfBirth: DS.attr('date'),
  dateOfDeath: DS.attr('date')

});
