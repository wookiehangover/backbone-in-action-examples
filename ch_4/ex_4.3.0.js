var CommentModel = Backbone.Model.extend({
  constructor: function(){
    this.user = new Backbone.Model();
    Backbone.Model.apply(this, arguments);
  }
});

// Server Response
{
  "id": 1,
  "content": "Hello World",
  "created_at": 1372108751023,
  "user": {
    "email": "walter@hankco.com",
    "name": "Walter Mellon",
    "website": "http://quickleft.com"
  }
}

var CommentModel = Backbone.Model.extend({
  constructor: function(){
    this.user = new Backbone.Model();
    Backbone.Model.apply(this, arguments);
  },
  parse: function(attrs){
    if( attrs.user ){
      this.user.set(attrs.user);
      attrs = _.omit(attrs, 'user');
    }
    return attrs;
  },
  toJSON: function(){
    var attrs = _.clone(this.attributes);
    var userAttrs = this.user.toJSON();
    if( _.isEmpty(userAttrs) === false ){
      attrs.user = userAttrs;
    }
    return attrs;
  },
  urlRoot: '/comments'
});

var comment = new Comment({ id: 1 });
comment.fetch();
comment.user.toJSON();
// {
//   "email": "walter@hankco.com",
//   "name": "Walter Mellon",
//   "website": "http://quickleft.com"
// }
comment.toJSON();
// {
//   "id": 1,
//   "content": "Hello World",
//   "created_at": 1372108751023,
//   "user": {
//     "email": "walter@hankco.com",
//     "name": "Walter Mellon",
//     "website": "http://quickleft.com"
//   }
// }

var CommentModel = Backbone.Model.extend({
  ...
  toJSON: function(options){
    options = options || {};
    var attrs = _.clone(this.attributes);
    var userAttrs = this.user.toJSON();
    if( !options.excludeUser && _.isEmpty(userAttrs) === false ){
      attrs.user = userAttrs;
    }
    return attrs;
  }
});

comment.toJSON({ excludeUser: true });
// {
//   "id": 1,
//   "content": "Hello World",
//   "created_at": 1372108751023
// }

