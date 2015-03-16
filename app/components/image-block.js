import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'width'],
  classNameBindings: ['classes'],


  // Attributes
  src:     Ember.computed.defaultTo('defaultSrc'),
  width:   Ember.computed.oneWay('defaultWidth'),
  height:  Ember.computed.oneWay('defaultWidth'),
  classes: Ember.computed.oneWay('defaultClasses'),



  // Defaults
  defaultWidth: 100,
  defaultClasses: '',

  defaultSrc: function() {
    if (this.get('width') > 200) {
      return 'https://dibl93mcd0mee.cloudfront.net/assets/antiquarium/no_photo/500@2x.png';
    } else {
      return 'https://dibl93mcd0mee.cloudfront.net/assets/antiquarium/no_photo/100.png';
    }
  }.property('width')


});
