import Ember from 'ember';

export default Ember.ObjectController.extend({
  //needs: ['source'],

  // Associations
  picture:   Ember.computed.alias('model.picture'),
  thumbnail: Ember.computed.alias('picture.image.thumbnail')


});
