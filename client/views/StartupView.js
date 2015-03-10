// AppView.js - Defines a backbone view class for the whole music app.
var StartupView = Backbone.View.extend({
  className: 'startupView',

  initialize: function(params){
    this.foundersView = new FoundersView({collection: this.model.get('founders')});
    // this.investorsView = new InvestorsView({collection: this.model.get('investors')});
    this.teamView = new TeamView({collection: this.model.get('team')});
    // this.miscView = new MiscView({collection: this.model.get('misc')});
    //console.log(this.model.get('founders'));
    this.foundersView.on('newStuff', function(){
      this.render(this.teamView.render('Not Complete'));
    }, this);
  },

  render: function(thing){
    return this.$el.html('<div></div>').append([
      thing
      // this.investorsView.$el,
      // this.teamView.$el,
      // this.miscView.$el
    ]);
  }

});
