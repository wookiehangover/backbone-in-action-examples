var PlaylistItemView = Backbone.View.extend({
  tagName: 'li',

  initialize: function(params){
    this.render();
  },

  render: function(){
    return this.$el.html( itemTemplate(this.model) );
  }
});

var PlaylistView = Backbone.View.extend({
  el: $('#playlist'),

  initialize: function(params){
    this.listenTo(this.collection, 'add', this.add);
  },

  add: function( model, collection ){
    model.view = new PlaylistItem({ model: model });
    this.$el.append( model.view.el );
  }
});

