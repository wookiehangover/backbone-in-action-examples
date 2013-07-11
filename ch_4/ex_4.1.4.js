var comment = new CommentModel({
  user: 'walter@hankco.com',
  body: 'Lorem ipsum...'
});

comment.id
// => undefined

comment.isNew()
// => true

comment.save()
// server responds with =>
// {
//   "id": 1,
//   "user": "walter@hankco.com",
//   "body": "Lorem ipsum..."
// }

comment.id
// => 1

comment.get('id')
// => 1

comment.isNew()
// => false

var CommentModel = Backbone.Model.extend({
  idAttribute: '_id'
});

var comment = new CommentModel({
  _id: 1,
  body: 'Lorem ipsum...'
});

comment.isNew()
// => false

comment.id
// => 1
