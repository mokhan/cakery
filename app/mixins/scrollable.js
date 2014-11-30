import Ember from 'ember';

export default Ember.Mixin.create({
  didScroll: function(){
    if(this.isScrolledToBottom()) {
      this.get('controller').send('more');
    }
  },

  isScrolledToBottom: function() {
    var distanceToTop = Ember.$(document).height() - Ember.$(window).height();
    var top = Ember.$(document).scrollTop();
    return top === distanceToTop;
  }
});
