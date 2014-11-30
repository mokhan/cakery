import {
  formattedDate
} from 'cakery/helpers/formatted-date';

module('FormattedDateHelper');

test('it renders a friendly date to display', function() {
  var date = new Date('2014-08-02T02:30:57');
  var result = formattedDate(date);
  equal(result, 'Aug 1st, 2014 at 8:30');
});
