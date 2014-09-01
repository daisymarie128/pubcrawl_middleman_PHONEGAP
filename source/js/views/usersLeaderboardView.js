// var app = app || {};

// app.UsersListView = Backbone.View.extend({
//   tagName: 'div',

//   events: {

//   },

//   initialize: function () {
//     if (app.currentView) {
//       app.currentView.remove();
//     }
//     app.currentView = this;
//   },

//   render: function () {
//     console.log('this works right?')
//     var usersListView = Handlebars.compile(app.templates.usersListView);
//     this.$el.html( usersListView({users: app.users.toJSON()}) );
//     var sortedUsers = this.collection.sortBy(function(user) {
//       return user.get('score')
//     })
//     _.each(sortedUsers.reverse(), function(user) {
//       var view = new app.UsersListView({model: user})
//       $('#content').append(view.render())
//     })
//   }
// });
