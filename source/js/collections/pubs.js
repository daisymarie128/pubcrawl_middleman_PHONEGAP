var app = app || {};

app.Pubs = Backbone.Collection.extend({
  model: app.Pub,
  url: 'http://fierce-river-3029.herokuapp.com/pubs.json'

});