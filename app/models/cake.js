import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  author: DS.belongsTo('user', {async: true}),
  photos: DS.hasMany('photo', {async: true}),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  primaryPhoto: function(){
    return this.get('selectedPhoto') || this.get('photos.firstObject');
  }.property('selectedPhoto', 'photos.firstObject'),
  choosePhoto: function(photo) {
    this.set('selectedPhoto', photo);
  },
});
