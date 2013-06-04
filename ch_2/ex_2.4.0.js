var CommentsView = Backbone.View.extend({
  initialize: function(){
    this.collection = new CommentsCollection();
    this.listenTo( this.collection, 'add', this.renderComment );
    this.listenTo( this.collection, 'error', this.renderError );
  },
  renderError: function(model, textStatus, xhr){
    var errorMessage = JSON.parse(xhr.responseText);
    this.$('form').prepend( errorTemplate(errorMessage) );
  }
});

