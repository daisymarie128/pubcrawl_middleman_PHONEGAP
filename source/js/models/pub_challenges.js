var app = app || {};

app.PubChallenge = Backbone.Model.extend({
  urlRoot: 'http://fierce-river-3029.herokuapp.com/pub_challenges.json',
  parse: function(challenge) {
    // Flatten the tasks into an array of task names.
    var tasks = [];
    for (var i = 0; i < challenge.tasks.length; i++) {
      tasks.push(challenge.tasks[i].task);
    }
    challenge.tasks = tasks;
    return challenge;
  }

});