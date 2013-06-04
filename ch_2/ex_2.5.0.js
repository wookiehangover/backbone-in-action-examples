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

var SingleCommentView = Backbone.View.extend({
  tagName: 'li',
  template: commentTemplate,

  render: function(){
    this.$el.html( this.template( this ) );
    return this.$el;
  }
});

var CommentsView = Backbone.View.extend({
  el: $('.comments'),

  initialize: function(){
    this.collection = new CommentsCollection();
    this.listenTo( this.collection, 'add', this.renderComment );

    this.listenTo( this.collection, 'error', function(model, status, xhr){
      var errorMessage = JSON.parse(xhr.responseText);
      this.renderError(errorMessage);
    }, this);

    this.listenTo( this.collection, 'invalid', function(model, error){
      this.renderError(error);
    }, this);
  },

  renderComment: function(model){
    model.view = new SingleCommentView({ model: model });
    this.$('#comment-list').prepend( model.view.render() );
    this.resetFormFields();
  },

  resetFormFields: function(){
    this.$('form textarea, form input[name="email"]').val(null);
  },

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

$(function(){
  window.comments = new CommentsView();
});


