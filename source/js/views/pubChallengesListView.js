var app = app || {};

app.PubChallengesListView = Backbone.View.extend({
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

    // list = this
    // var pubChallengesTemplate = Handlebars.compile(app.templates.pubChallengesListView);
    // app.pubChallenges.fetch().done(function(){
    //   console.log( app.pubChallenges )
    //   list.$el.html( pubChallengesTemplate({pub_challenges: app.pubChallenges.toJSON()}) );
    //   list.$el.attr('id', 'pub-challenges-view');
    //   $('#content').append( list.$el );


    console.log('nothing ever works')
    var pubChallengesListView = Handlebars.compile(app.templates.pubChallengesListView);
    this.$el.html( pubChallengesListView({pubChallenges: app.pubChallenges.toJSON()}) );
    this.$el.attr('id', 'pub-challenges-view');
    $('#content').append( this.el );
  }
});
