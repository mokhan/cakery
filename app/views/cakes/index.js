import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function(){
    var view = this;
    Ember.$(window).bind('scroll', function(){
      view.didScroll();
    });
  },

  willDestroyElement: function(){
    Ember.$(window).unbind('scroll');
  },

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
