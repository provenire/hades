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


  // Person
  gender:      DS.attr('string'),
  nationality: DS.attr('string'),
  dateOfBirth: DS.attr('date'),
  dateOfDeath: DS.attr('date'),


  // Associations
  //affiliations: DS.belongsTo('affiliation', { async: true }),
  picture:   DS.belongsTo('source',    { async: true }),
  events:    DS.hasMany(  'event',     { async: true }),
  photos:    DS.hasMany(  'source',    { async: true }),
  sources:   DS.hasMany(  'source',    { async: true })
  //citations: DS.hasMany(  'citations', { async: true })

});
