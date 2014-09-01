var app = app || {};

app.Tasks = Backbone.Collection.extend({
  model: app.Task,
  url: 'http://fierce-river-3029.herokuapp.com/achievements.json'

});