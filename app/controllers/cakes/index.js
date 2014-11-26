import Ember from 'ember';

export default Ember.ArrayController.extend({
  page: 1,
  perPage: 18,
  actions: {
    nextPage: function(){
      this.set('perPage', this.get('perPage') + 18);
      var that = this;
      this.store.find('cake', { page: 1, per_page: this.get('perPage') }).then(function(cakes){
        that.set('content', cakes);
      });
    },
  },
});
