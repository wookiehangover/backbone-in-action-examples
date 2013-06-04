var CommentsView = Backbone.View.extend({
  //...
  events: {
    'submit form': 'createComment'
  },
  createComment: function(event){
    event.preventDefault();

    var commentData = {
      content: this.$('form textarea').val(),
      email: this.$('form input[name="email"]').val(),
      created_at: +new Date()
    };

    this.collection.add(commentData);
  }
});

