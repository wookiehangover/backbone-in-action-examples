// file -- app-view.js
var Backbone = require('backbone');

module.exports = Backbone.View.extend({
  initialize: function(){
    // ...
  }
});


// file -- main.js
var $ = require('jQuery');
var PlaylistAppView = require('./app-view');

$(function(){
  window.Playlist = new PlaylistAppView();
});

