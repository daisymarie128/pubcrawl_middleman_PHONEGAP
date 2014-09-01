var app = app || {};

app.PubChallenges = Backbone.Collection.extend({
  model: app.PubChallenge,
  url: 'http://fierce-river-3029.herokuapp.com/pub_challenges.json'

});