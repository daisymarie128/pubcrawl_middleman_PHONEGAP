var app = app || {};

app.Users = Backbone.Collection.extend({
  model: app.User,
  url: 'http://fierce-river-3029.herokuapp.com/users.json'

});