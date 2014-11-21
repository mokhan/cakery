import DS from 'ember-data';

export default DS.Model.extend({
  thumbUrl: DS.attr('string'),
  largeUrl: DS.attr('string'),
  originalUrl: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
});
