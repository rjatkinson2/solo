// SongQueueView.js - Defines a backbone view class for the song queue.
var FoundersView = Backbone.View.extend({
  className: 'founders-collection',
  initialize: function() {
    this.collection.on('change', function(check){
      if(this.collection.where({status: true}).length === this.collection.length){
        this.render('Round 1 Complete!');
      }
    }, this);
  },

  render: function(status) {
    return this.$el.html(
      this.collection.map(function(founder){
        return new FounderView({model: founder}).render();
      })
    ).append('<p>' + status + '</p>');
  }

});
