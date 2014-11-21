import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    selectPhoto: function(photo) {
      this.model.choosePhoto(photo);
    }
  }
});
