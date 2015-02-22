import DS from 'ember-data';

export default DS.Model.extend({
  uuid:        DS.attr('string'),
  slug:        DS.attr('string'),
  email:       DS.attr('string'),
  name:        DS.attr('string'),
  description: DS.attr('string'),
  company:     DS.attr('string'),
  location:    DS.attr('string')
});
