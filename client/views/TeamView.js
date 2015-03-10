// SongQueueView.js - Defines a backbone view class for the song queue.
var TeamView = Backbone.View.extend({
  tagName: 'ul',
  className: 'small-block-grid-3',
  initialize: function(params) {
    this.collection.on('change', function(check){
      if(this.collection.where({status: true}).length === this.collection.length){
        this.render('Round 2 Complete!');
      }
    }, this);
  },

  render: function(status) {
    return this.$el.html(
      this.collection.map(function(team){
        return new EmployeeView({model: team}).render();
      })
    ).prepend('<h2>Round 2 - Name the Employees!</h2>').append('<h2>' + status + '</h2>');
  }

});
