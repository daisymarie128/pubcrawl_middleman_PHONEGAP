var app = app || {};

app.Task = Backbone.Model.extend({
  urlRoot: 'http://fierce-river-3029.herokuapp.com/tasks.json'
});
