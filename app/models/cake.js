import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.belongsTo('category'),
  author: DS.belongsTo('user'),
  photos: DS.hasMany('photo'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  primaryPhoto: function(){
    return this.get('selectedPhoto') || this.get('photos.firstObject');
  }.property('selectedPhoto', 'photos.firstObject'),
  choosePhoto: function(photo) {
    this.set('selectedPhoto', photo);
  },
});
