test('PlaylistItemView#render – should call $el.html', function(){
  sinon.spy(jQuery.fn, 'html');

  var model = new Backbone.Model({ title: "Hey Jude" });
  var itemView = new PlaylistItemView({ model: model });

  assert.ok(jQuery.fn.html.calledOnce);
  assert.ok(jQuery.fn.html.calledWith( itemView.template(model) ));
  jQuery.fn.html.restore();
});

