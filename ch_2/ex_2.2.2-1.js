var CommentsView = Backbone.View.extend({
  el: $('.comments'),
  events: {
    'submit form': 'createComment'
  },
  createComment: function(event){
    // handle the form submit
  }
});
