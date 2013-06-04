var CommentsView = Backbone.View.extend({
  el: $('.comments'),
  initialize: function(){
    this.collection = new CommentsCollection();
    this.listenTo( this.collection, 'add', this.renderComment );
  },
  renderComment: function(model){
    model.view = new SingleCommentView({ model: model });
    this.$('#comment-list').prepend( model.view.render() );
    this.resetFormFields();
  },
  resetFormFields: function(){
    this.$('form textarea, form input[name="email"]').val(null);
  },
  // ...
});

