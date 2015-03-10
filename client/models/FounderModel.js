// SongModel.js - Defines a backbone model class for songs.
var FounderModel = Backbone.Model.extend({
  defaults:{
    status: false
  },

  success: function(){
    this.set('status', true);
    this.trigger('success', this);
  }
});
