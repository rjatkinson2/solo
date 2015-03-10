var MiscModel = Backbone.Model.extend({
  defaults:{
    status: false
  },

  success: function(){
    this.set('status', true);
    this.trigger('success', this);
  }  
});