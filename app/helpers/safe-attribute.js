import Ember from 'ember';

export function safeAttribute(input) {
  var unknown = 'Unknown';
  return input || ('<em>' + unknown + '</em>').htmlSafe();
}

export default Ember.Handlebars.makeBoundHelper(safeAttribute);
