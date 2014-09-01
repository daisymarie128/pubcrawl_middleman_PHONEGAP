var app = app || {};

app.currentUserView = Backbone.View.extend({
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
    console.log('current users view')
    var currentUserView = Handlebars.compile(app.templates.currentUserView);
    this.$el.html( currentUserView({users: app.users.toJSON()}) );

    this.$el.attr('id', 'current-user-view');
    $('#content').append( this.el );
  }
});