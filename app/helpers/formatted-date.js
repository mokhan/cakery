/* global moment:true */
import Ember from 'ember';

export function formattedDate(date) {
  return moment(date).format('MMM Do, YYYY [at] h:mm');
}

export default Ember.Handlebars.makeBoundHelper(formattedDate);
