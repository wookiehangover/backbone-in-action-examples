var PlaylistCollection = Backbone.Collection.extend({});

var FormView = Backbone.View.extend({
  el: $('#add-item'),

  initialize: function(){
    if( !this.collection ){
      throw new Error('Requires a collection');
    }
  },

  // ...
});

var PlaylistAppView = Backbone.View.extend({
  el: $('body'),

  initialize: function(){
    this.collection = new PlaylistCollection();
    this.form = new Form({ collection: this.collection });
  }
});

