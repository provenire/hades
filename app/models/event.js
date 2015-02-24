import DS from 'ember-data';

export default DS.Model.extend({

  // Standard
  uuid:        DS.attr('string'),
  slug:        DS.attr('string'),
  name:        DS.attr('string'),
  description: DS.attr('string'),

  createdAt:   DS.attr('date'),
  updatedAt:   DS.attr('date'),


  // Event
  date:          DS.attr('date'),
  status:        DS.attr('string'),
  priceCents:    DS.attr('number'),
  priceCurrency: DS.attr('string'),
  failed:        DS.attr('boolean'),


  // Decorators
  subjectName:   DS.attr('string'),
  recipientName: DS.attr('string'),
  artifactsName: DS.attr('string'),


  // Associations
  artifacts: DS.hasMany('artifact', { async: true })

});
