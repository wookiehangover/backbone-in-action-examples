var PlaylistItemModel = Backbone.Model.extend({
  initialize: function(){
    this.setMetadata();
  },

  validate: function(attrs){
    if( !attrs.url ){
      return "You must provide a valid url";
    }
  },

  types: {
    youtube: /youtube/,
    soundcloud: /soundcloud/
  },

  setMetadata: function(){
    var url = this.get('url');

    if( this.types.soundcloud.test(url) ){
      this.metadata = new SoundcloudModel({ url: url });
    }

    if( this.metadata ){
      this.metadata.on('change', function(){
        this.trigger('change');
      }, this);
    }
  }
});

var SoundcloudModel = Backbone.Model.extend({
  initialize: function( attributes, params ){
    this.fetch({
      dataType: 'jsonp'
    });
  },

  url: function(){
    return this.get('url') + '.json?client_id=XXXXXXXX';
  }
});

