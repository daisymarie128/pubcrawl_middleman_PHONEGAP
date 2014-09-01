var app = app || {};

app.User = Backbone.Model.extend({
  urlRoot: 'http://fierce-river-3029.herokuapp.com/users.json'
});
