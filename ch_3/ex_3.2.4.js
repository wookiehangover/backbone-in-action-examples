var Router = Backbone.Router.extend({

  initialize: function(params){
    this.app = params.app;

    if( !this.app ){
      throw new Error('Requires an application instance');
    }
  },

  routes: {
    'playlist/:id': 'showPlaylist'
  },

  showPlaylist: function( id ){
    this.app.playlist.load( id );
  }
});

