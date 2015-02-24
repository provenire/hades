import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  serialize: function(snapshot, options) {
    var json = this._super(snapshot, options);

    delete json.uuid;
    delete json.slug;
    delete json.created_at;
    delete json.updated_at;

    delete json.thumbnail;
    delete json.show_image;

    return json;
  }
});
