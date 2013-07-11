var UserModel = Backbone.Model.extend({
  resetPassword: function(email) {
    var user = this;
    var params = {
      data: email,
      type: 'post',
      url: '/api/v1/password_resets',
      success: function(data) {
        user.trigger('reset:success', data);
      },
      error: function() {
        user.trigger('reset:error');
      }
    };
    return $.ajax(params);
  }
});

