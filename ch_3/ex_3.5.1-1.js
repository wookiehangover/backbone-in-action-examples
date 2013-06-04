// file -- view.erb
<script>
window.user = <%= @posts.to_json %>;
</script>

// Later on, in your Backbone application
var UserModel = Backbone.Model.extend({
  initialize: function(){
    if( window.user ){
      this.set(window.user);
    }
  }
});

