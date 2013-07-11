var UserModel = Backbone.Model.extend({
  url: '/user/me.json',
  initialize: function(){
    this.fetch();
  }
});

var UserView = Backbone.View.extend({
  el: $('#user-profile'),

  template: userProfileTemplate,

  initialize: function(params){
    if( !params.model ){
      throw new Error('UserView requires a model');
    }
    this.listenTo(this.model, 'change', this.render);
  },

  showProfile: function(){
    this.$el.show();
  },

  render: function(){
    this.$el.html( this.template(this.model.toJSON()) );
  }
});

var Router = Backbone.Router.extend({
  initialize: function(params){
    if( !params.userView ){
      throw new Error('Router requires a userView instance');
    }
    this.userView = params.userView;
  },
  routes: {
    'profile': 'showUserProfile'
  },
  showUserProfile: function(){
    this.userView.showProfile();
  }
});

$(function(){
  var app = {};
  app.user = new UserModel();
  app.userView = new UserView({ model: app.user });
  app.router = new Router({ userView: app.userView});

  Backbone.history.start();
});
