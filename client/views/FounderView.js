// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var FounderView = Backbone.View.extend({

  template: _.template('<img src="<%= image %>">'),

  events: {
    // 'click': function() {
    //   this.model.dequeue();
    // }
  },

  render: function(){
    return this.$el.append(this.template(this.model.get('tagged')));
  }

});
