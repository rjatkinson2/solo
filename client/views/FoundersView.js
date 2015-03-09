// SongQueueView.js - Defines a backbone view class for the song queue.
var FoundersView = Backbone.View.extend({
  className: 'founders-collection',
  initialize: function() {
    // this.collection.on('add remove', this.render, this);
    // this.render();
  },

  render: function() {
    // this.$el.children().detach();
    console.log('anything');
    return this.$el.html(
      this.collection.map(function(founder){
        return new FounderView({model: founder}).render();
      })
    );
  }

});
