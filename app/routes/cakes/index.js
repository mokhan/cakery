import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  page: 1,
  perPage: 12,
  model: function(params) {
    params.paramMapping = {
      page: "page",
      perPage: "perPage",
      total_pages: "totalPages"
    };
    return this.findPaged('cake', params);
  }
});
