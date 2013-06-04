var CommentsView = Backbone.View.extend({
  initialize: function(){
    this.collection = new CommentCollection();
    this.listenTo( this.collection, 'add', function(model){
      console.log(model.attributes);
      // => { content: ..., email: 'sam@example.com', created_at: ... }
    });
  },
  // ...
});

