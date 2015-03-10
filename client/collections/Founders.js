var Founders = Backbone.Collection.extend({
  model: FounderModel,
  
  defaults: {
    collectionStatus: false,
    count: 0
  },

  initialize: function(){
    this.on('success', this.updates, this);
  },

  updates: function(song){
    console.log(this);

    if(this.count === this.length){
      this.collectionStatus = true;
    }
  }

});