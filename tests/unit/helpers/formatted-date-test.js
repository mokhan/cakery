import {
  formattedDate
} from 'cakery/helpers/formatted-date';

module('FormattedDateHelper');

test('it renders a friendly date to display', function() {
  equal(formattedDate(new Date('2014-08-02T02:30:57.182Z')), 'Aug 2nd, 2014 at 2:30');
});
