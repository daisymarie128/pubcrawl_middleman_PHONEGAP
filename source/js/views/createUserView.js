var app = app || {};

app.UserView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click button': 'createUser'
  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    var userView = Handlebars.compile(app.templates.userView);
    this.$el.html( userView( app.currentUser || {} ) );
    this.$el.attr('id', 'user-view');
    $('#content').html(this.el);
  },

  createUser: function () {
    // stops the form from submitting params with the button.
    event.preventDefault();
    // saves to the rails database
    // console.log($('#password').val())


    var formData = new FormData();
      formData.append('pub[first_name]', $('#first_name').val());
      formData.append('pub[last_name]', $('#last_name').val());
      formData.append('pub[username]', $('#username').val());
      // formData.append('pub[avatar]', $('#avatar')[0].files[0]);
      formData.append('pub[email]', $('#email').val());
      formData.append('pub[password]', $('#password').val());
      formData.append('pub[password_confirmation]', $('#password_confirmation').val());
      formData.append('pub[location]', $('#location').val());
        console.log('were here!')
        console.log($('#password').val(), $('#password_confirmation').val())
      $.ajax({
        url: 'http://fierce-river-3029.herokuapp.com/users',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST'
      }).done( function (){
        console.log('did this hsit work')
      }).fail( function (){
        console.log('i assumed this would fail')
      });


    // var newUser = new app.User({
    //   first_name: $('#first_name').val(),
    //   last_name: $('#last_name').val(),
    //   username: $('#username').val(),
    //   email: $('#email').val(),
    //   password: $('#password').val(),
    //   password_confirmation: $('#password_confirmation').val(),
    //   avatar: $('#avatar').val(),
    //   location: $('#location').val()});
    // newUser.save();
    // adds to the backbone memory (browser)
    // app.users.add(newUser);
    // Send view to a users list
    app.router.navigate("users/list", true);
  }

});
