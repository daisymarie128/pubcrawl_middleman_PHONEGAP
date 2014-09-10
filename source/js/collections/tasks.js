var app = app || {};

app.Tasks = Backbone.Collection.extend({
  model: app.Task,
  url: 'http://pubcrawlll.herokuapp.com/achievements.json'

});