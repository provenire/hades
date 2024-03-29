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


  // Artifact
  alternateNames: DS.attr('array'),
  artist:         DS.attr('string'),
  dimensions:     DS.attr('string'),
  dateCreated:    DS.attr('string'),


  // Associations
  picture:   DS.belongsTo('source',    { async: true }),
  events:    DS.hasMany(  'event',     { async: true }),
  photos:    DS.hasMany(  'source',    { async: true }),
  sources:   DS.hasMany(  'source',    { async: true })
  //citations: DS.hasMany(  'citations', { async: true })

});
