var app = app || {};

app.UsersListView = Backbone.View.extend({
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
    console.log('this works right?')
    var usersListView = Handlebars.compile(app.templates.usersListView);
    this.$el.html( usersListView({users: app.users.toJSON()}) );

    this.$el.attr('id', 'users-list-view');
    $('#content').append( this.el );
  }
});