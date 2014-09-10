var app = app || {};

app.PubChallenges = Backbone.Collection.extend({
  model: app.PubChallenge,
  url: 'http://pubcrawlll.herokuapp.com/pub_challenges.json'

});