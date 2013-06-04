var CommentCollection = Backbone.Collection.extend({});

var CommentsView = Backbone.View.extend({
  initialize: function(){
    this.collection = new CommentCollection();
  },
  el: $('.comments'),
  events: {
    'submit form': 'createComment'
  },
  createComment: function(event){
    // handle the form submit
  }
});

