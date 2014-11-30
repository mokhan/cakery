import Ember from 'ember';

export default Ember.ArrayController.extend({
  page: 1,
  per_page: 18,
  queryParams: ['page', 'per_page'],
  actions: {
    more: function(){
      //this.incrementProperty('page');
      this.incrementProperty('per_page', 18);
      this.displayPage(this.get('page'), this.get('per_page'));
    },
  },
  displayPage: function(page, perPage){
    var that = this;
    this.store.find('cake', { page: page, per_page: perPage }).then(function(cakes){
      that.set('content', cakes);
    });
  }
});
