var app = app || {};

app.Task = Backbone.Model.extend({
  urlRoot: 'http://pubcrawlll.herokuapp.com/tasks.json'
});
