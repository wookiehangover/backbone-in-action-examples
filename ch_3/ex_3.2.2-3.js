var PlaylistItemView = Backbone.View.extend({
  // ...
  events: {
    'click [data-action="destroy"]': 'destroy'
  },

  destroy: function(e){
    e.preventDefault();
    this.model.destroy();
  }
});

