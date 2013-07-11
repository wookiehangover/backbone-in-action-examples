var UserView = Backbone.View.extend({
  initialize: function(){
    if( !this.model ){
      throw new Error('UserView requires a model instance');
    }
    this.listenTo(this.model, 'change', this.render);
  }
});

var user = new UserModel();

var userView = new UserView({ model: user });
