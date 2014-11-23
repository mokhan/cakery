import Ember from 'ember';

export default Ember.Route.extend({
  page: 1,
  perPage: 12,
  actions: {
    nextPage: function(){
      this.set('perPage', this.get('perPage') + 12);
      var that = this;
      this.store.find('cake', { page: 1, per_page: this.get('perPage') }).then(function(cakes){
        that.controllerFor('cakes.index').set('content', cakes);
      });
    },
  },
  model: function(params) {
    return this.store.find('cake', params);
  },
});
