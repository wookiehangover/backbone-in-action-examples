var CommentCollection = Backbone.Collection.extend({
  url: "/posts/123/comments"
});

var CommentsView = Backbone.View.extend({
  //...
  createComment: function(event){
    event.preventDefault();
    var commentData = { body: "hello world" };
    this.collection.create(commentData);
  }
});

