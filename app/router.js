import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('cakes', function() {
    this.resource('cake', { path: '/:cake_id' });
  });
  this.resource('tutorials', function() {
    this.resource('tutorial', { path: '/:tutorial_id' });
  });
});

export default Router;
