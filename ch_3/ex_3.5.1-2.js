var UserModel = Backbone.Model.extend({
  url: '/api/users/current',
  initialize: function(){
    this.fetch();
  }
});

