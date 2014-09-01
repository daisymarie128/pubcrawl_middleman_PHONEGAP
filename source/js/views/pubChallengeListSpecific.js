var app = app || {};

app.PubChallengesListSpecific = Backbone.View.extend({
  tagName: 'div',

  events: {

  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    console.log('for the love of god work')
    var pubChallengesListView = Handlebars.compile(app.templates.pubChallengesListSpecific);
    this.$el.html( pubChallengesListSpecific({pubChallenges: app.pubChallenges.toJSON()}) );
    this.$el.attr('id', 'pub-challenges-specific');
    $('#content').append( this.el );
  }
});
