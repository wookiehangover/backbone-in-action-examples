var SingleCommentView = Backbone.View.extend({
  tagName: 'li',
  template: commentTemplate,
  render: function(){
    this.$el.html( this.template( this ) );
    return this.$el;
  }
});
