import Ember from 'ember';

export default Ember.Route.extend({
  page: 1,
  perPage: 12,
  model: function(params) {
    return this.store.find('cake', params);
  }
});
