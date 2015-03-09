// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var FounderView = Backbone.View.extend({

  template: _.template('<img src="<%= image %>"><input class="guess" placeholder="guess the name..."></input><p>does not match</p>'),

  events: {
    'change input.guess': function() {
      console.log('hellsyea!');
    //if(input.guess.val() === this.model.get('tagged')){}
    }
  },

  render: function(){
    return this.$el.append(this.template(this.model.get('tagged')));
  }

});
