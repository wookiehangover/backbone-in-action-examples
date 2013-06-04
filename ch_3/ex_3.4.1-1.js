var itemTemplate = _.template('<h2><%= get("title") %></h2>');

var PlaylistItemView = Backbone.View.extend({
  // ...
  template: itemTemplate,
  render: function(){
    return this.$el.html( this.template(this.model) );
  }
});

test('PlaylistItemView#render – should render correctly', function(){
  var model = new Backbone.Model({ title: "Hey Jude" });
  var itemView = new PlaylistItemView({ model: model });

  assert.equal(itemView.$el.html(), '',
    'Ensure view element has no conent before render');

  itemView.render();

  assert.equal(itemView.$('h2').text(), 'Hey Jude',
    'The content has been added as expected');
});

