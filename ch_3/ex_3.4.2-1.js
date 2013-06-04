test('PlaylistItemView#initialize – should call render', function(){
  sinon.spy(PlaylistItemView.prototype, 'render');

  var model = new Backbone.Model({ title: "Hey Jude" });
  var itemView = new PlaylistItemView({ model: model });

  assert.ok( PlaylistItemView.prototype.render.calledOnce );

  PlaylistItemView.prototype.render.restore();
});

