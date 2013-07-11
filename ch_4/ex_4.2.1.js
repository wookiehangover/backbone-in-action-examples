var socket = io.connect('http://localhost');

var UserModel = Backbone.Model.extend({
  sync: function(method, model, options){
    if( method === 'delete' ){
      socket.emit('user_delete', model.id);
    } else {
      socket.emit('user_sync', model.toJSON());
    }
  }
});
