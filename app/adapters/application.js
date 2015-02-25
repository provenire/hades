import DS  from 'ember-data';
import ENV from 'hades/config/environment';

export default DS.ActiveModelAdapter.extend({
  host: ENV.APP.apiBase
});
