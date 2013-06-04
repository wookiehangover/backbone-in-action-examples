var CommentsView = Backbone.View.extend({
  // ...
  initialize: function(){
    this.listenTo( this.collection, 'error', function(model, status, xhr){
      var errorMessage = JSON.parse(xhr.responseText);
      this.renderError(errorMessage);
    }, this);

    this.listenTo( this.collection, 'invalid', function(model, error){
      this.renderError(error);
    }, this);
  },
  renderError: function(message){
    this.$('form').prepend( errorTemplate(message) );
  },
  // ...
});

