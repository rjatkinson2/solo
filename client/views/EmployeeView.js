// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var EmployeeView = Backbone.View.extend({
  // defaults:{
  //   correct: false
  // },

  template: _.template('<img src="<%= image %>"><input class="guess" placeholder="guess the name..."></input><p><%- correct %></p>'),

  events: {
    'change input.guess': function() {
      var test = this.$el.children('input.guess').val();
      var answer = this.model.get('tagged').name.split(' ')[0];
      if(test === answer){
        this.model.success();
        this.render();
      }
    }
  },

  render: function(){
    this.$el.empty();
    var params = this.model.get('tagged');
    params.correct = this.model.get('status');
    return this.$el.append(this.template(params));
  }


});
