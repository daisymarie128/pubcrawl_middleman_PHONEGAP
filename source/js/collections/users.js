var app = app || {};

app.Users = Backbone.Collection.extend({
  model: app.User,
  url: 'http://pubcrawlll.herokuapp.com/users.json'

});