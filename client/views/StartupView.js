// AppView.js - Defines a backbone view class for the whole music app.
var StartupView = Backbone.View.extend({
  className: 'startupView',

  initialize: function(params){
    this.foundersView = new FoundersView({collection: this.model.get('founders')});
    // this.investorsView = new InvestorsView({collection: this.model.get('investors')});
    this.teamView = new TeamView({collection: this.model.get('team')});
    // this.miscView = new MiscView({collection: this.model.get('misc')});
    //console.log(this.model.get('founders'));
  },

  render: function(){
    return this.$el.html([
      this.foundersView.render('Not Complete'),
      this.teamView.render('Not Complete')
      // this.investorsView.$el,
      // this.teamView.$el,
      // this.miscView.$el
    ]);
  }

});
