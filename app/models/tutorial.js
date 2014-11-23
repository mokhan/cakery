import DS from 'ember-data';

export default DS.Model.extend({
  heading: DS.attr('string'),
  description: DS.attr('string'),
  url: DS.attr('string'),
  imageUrl: DS.attr('string'),
  author: DS.belongsTo('user')
});
