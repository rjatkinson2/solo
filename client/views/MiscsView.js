// SongQueueView.js - Defines a backbone view class for the song queue.
var MiscsView = Backbone.View.extend({
  tagName: 'ul',
  className: 'small-block-grid-3',
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
      this.collection.map(function(misc){
        return new MiscView({model: misc}).render();
      })
    ).prepend('<h2>Round 1 - Name the Founders!</h2>').append('<h2>' + status + '</h2>');
  }

});
  