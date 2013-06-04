var PlaylistItemView = Backbone.View.extend({
  initialize: function(){
    if( !this.model ){
      throw new Error('You must provide a model');
    }
  },
  // ...
});

test('PlaylistItemView#initialize – should require a model', function(){
  assert.throws(function(){
    new PlaylistItemView();
  },
  /You must provide a model/,
  'An error happens if you try to create this view without a model.');
});

