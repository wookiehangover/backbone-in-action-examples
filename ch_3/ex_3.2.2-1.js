var PlaylistItemView = Backbone.View.extend({
  // ...
  initialize: function(params){
    this.render();
  }
});

var PlaylistView = Backbone.View.extend({
  // ...
  add: function( model, collection ){
    model.view = new PlaylistItem({ model: model });
    this.$el.append( model.view.el );
  }
});

