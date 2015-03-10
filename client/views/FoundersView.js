// SongQueueView.js - Defines a backbone view class for the song queue.
var FoundersView = Backbone.View.extend({
  className: 'founders-collection',
  initialize: function() {
    this.collection.on('change', function(check){
      if(this.collection.where({status: true}).length === this.collection.length){
        this.render('Round 1 Complete!');
        this.trigger('newStuff', this);
      }
    }, this);
  },

  render: function(status) {
    return this.$el.html(
      this.collection.map(function(founder){
        return new FounderView({model: founder}).render();
      })
    ).prepend('<h1>Round 1 - Name the Founders!</h1>').append('<p>' + status + '</p>');
  }

});
