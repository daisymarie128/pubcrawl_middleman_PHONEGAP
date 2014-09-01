var app = app || {};

app.PubsListView = Backbone.View.extend({
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
    console.log('nothing ever works')
    var pubsListView = Handlebars.compile(app.templates.pubsListView);
    this.$el.html( pubsListView({pubs: app.pubs.toJSON()}) );
    this.$el.attr('id', 'pubs-list-view');
    $('#content').append( this.el );
  }
});
