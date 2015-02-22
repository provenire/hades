import Ember from 'ember';

export function capitalizeString(str) {
  return str.capitalize();
}

export default Ember.Handlebars.makeBoundHelper(capitalizeString);
