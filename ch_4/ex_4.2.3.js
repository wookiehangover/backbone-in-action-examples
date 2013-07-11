var UserModel = Backbone.Model.extend({
  url: '/user/me.json'
});

var user = new UserModel();

user.fetch();
// Ruby On Rails server returns =>
// { user:
//   {
//     id: 1,
//     firstName: 'Walter',
//     lastName: 'Mellon'
//   }
// }

user.get('firstName'); // undefined

user.toJSON();
// { user:
//   {
//     id: 1,
//     firstName: 'Walter',
//     lastName: 'Mellon'
//   }
// }


var UserModel = Backbone.Model.extend({
  url: '/user/me.json',
  parse: function(attrs){
    if( !attrs.user ){
      throw new Error('Malformed user data');
    }
    return attrs.user;
  }
});

user.fetch();
user.get('firstName');
// => Walter

user.toJSON();
// {
//   id: 1,
//   firstName: 'Walter',
//   lastName: 'Mellon'
// }


