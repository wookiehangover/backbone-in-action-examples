var CommentsCollection = Backbone.Collection.extend({
  initialize: function(){
    this.favorites = new Backbone.Collection(
      this.where({ favorite: true })
    );

    this.on('change:favorite', function(model){
      if( model.get('favorite') ){
        this.favorites.add(model);
      } else {
        this.favorites.remove(model);
      }
    }, this);
  }
});

var comments = new CommentsCollection([
  { content: "hello" },
  { content: "world", favorite: true }
]);

comments.favorites.toJSON();
// [{
//   content: "world",
//   favorite: true
// }]

comments.favorites.first().unset('favorite');

comments.favorites.toJSON();
// []
