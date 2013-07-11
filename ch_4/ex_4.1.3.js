var CommentModel = Backbone.Model.extend({
  defaults: {
    user: 'anonymous'
  }
});

var comment = new CommentModel({ body: 'Lorem ipsum...' });
comment.toJSON();
// {
//   body: 'Lorem ipsum...',
//   user: 'anonymous'
// }


var CommentModel = Backbone.Model.extend({
  defaults: {
    created_at: new Date()
  }
});

var comment1 = new CommentModel();
// some time later
var comment2 = new CommentModel();

comment1.get('created_at') === comment2.get('created_at')
// => true


var CommentModel = Backbone.Model.extend({
  defaults: function(){
    return {
      created_at: new Date()
    };
  }
});
