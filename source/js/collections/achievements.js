var app = app || {};

app.Achievements = Backbone.Collection.extend({
  model: app.Achievement,
  url: 'http://fierce-river-3029.herokuapp.com/achievements.json'

});