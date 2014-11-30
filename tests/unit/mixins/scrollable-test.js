import Ember from 'ember';
import ScrollableMixin from 'cakery/mixins/scrollable';

module('ScrollableMixin');

// Replace this with your real tests.
test('it works', function() {
  var ScrollableObject = Ember.Object.extend(ScrollableMixin);
  var subject = ScrollableObject.create();
  ok(subject);
});
