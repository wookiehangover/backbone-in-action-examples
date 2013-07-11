var UserModel = Backbone.Model.extend({
  getFullName: function(){
    return this.get('firstName') + ' ' + this.get('lastName');
  },
  toJSON: function(){
    var attrs = _.clone(this.attributes);
    attrs.fullName = this.getFullName();
    return attrs;
  }
});

var user = new UserModel({
  firstName: 'Walter',
  lastName: 'Mellon'
});

user.toJSON();
// {
//   firstName: 'Walter',
//   lastName: 'Mellon',
//   fullName: 'Walter Mellon'
// }
