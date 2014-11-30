import Ember from 'ember';
import Scrollable from 'cakery/mixins/scrollable';

export default Ember.View.extend(Scrollable, {
  didInsertElement: function(){
    var view = this;
    Ember.$(window).bind('scroll', function(){
      view.didScroll();
    });
  },

  willDestroyElement: function(){
    Ember.$(window).unbind('scroll');
  },
});
