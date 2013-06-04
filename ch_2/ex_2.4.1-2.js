var view = new Backbone.View({
  initialize: function(){
    this.deferred = this.collection.fetch();
  },
  // ...
});

var Router = Backbone.Router.extend({
  // ...
  post: function(id){
    view.deferred.done(function(){
      var model = collection.get(id);
      view.render( model );
    });
  }
});

