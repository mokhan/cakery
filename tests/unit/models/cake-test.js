import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('cake', 'Cake', {
  // Specify the other units that are required for this test.
  needs: ['model:category', 'model:user', 'model:photo']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
