var PlaylistItemView = Backbone.View.extend({
  initialize: function(params){
    this.listenTo(this.model, 'remove', this.remove);
    this.render();
  }
});
