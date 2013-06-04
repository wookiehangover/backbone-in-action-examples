var collection = new Backbone.Collection({ url: '/posts' });

var view = new Backbone.View({
  collection: collection,
  initialize: function(){
    this.collection.fetch();
  },
  // ...
});

var Router = Backbone.Router.extend({
  routes: {
    'posts/:id': 'post'
  },
  post: function(id){
    var model = collection.get(id);
    view.render( model );
  }
});

var router = new Router();

Backbone.history.start();

