var CommentModel = Backbone.Model.extend({
  validate: function(attrs){
    if( !attrs.email || !attrs.content ){
      return 'Missing required fields';
    }
  }
});

var CommentCollection = Backbone.Collection.extend({
  model: CommentModel,
  url: '/posts/123/comments'
});

