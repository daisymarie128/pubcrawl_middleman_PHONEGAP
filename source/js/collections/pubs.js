var app = app || {};

app.Pubs = Backbone.Collection.extend({
  model: app.Pub,
  url: 'http://pubcrawlll.herokuapp.com/pubs.json'

});