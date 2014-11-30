import DS from 'ember-data';
import ENV from 'cakery/config/environment';
export default DS.RESTAdapter.extend({
  namespace: 'api/v2'
});
