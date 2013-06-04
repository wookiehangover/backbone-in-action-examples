var PlaylistAppView = Backbone.View.extend({
  el: $('body'),

  initialize: function(){
    // create a new Collection
    this.collection = new PlaylistCollection();

    // Attach all application subviews
    var options = { collection: this.collection };  
    this.video    = new Video( options );
    this.form     = new Form( options );
    this.playlist = new Playlist( options );

    // Add a router
    this.router = new Router({ app: this });
  }
});

$(function(){
  window.playlist = new PlaylistAppView();
  Backbone.history.start();
});

