import DS from 'ember-data';

export default DS.Model.extend({

  // Standard
  uuid:        DS.attr('string'),
  slug:        DS.attr('string'),
  name:        DS.attr('string'),
  description: DS.attr('string'),

  createdAt:   DS.attr('date'),
  updatedAt:   DS.attr('date'),

  // User
  email:       DS.attr('string'),
  company:     DS.attr('string'),
  location:    DS.attr('string')
  
});
