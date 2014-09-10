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
        url: 'http://pubcrawlll.herokuapp.com/users',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function(response){
          app.currentUser = response;
          if (response.type == 'pub') {
          console.log('this is a pub')
          app.currentUser = response.user;
          app.currentUser.type = 'pub'
          var pubNavBar = Handlebars.compile(app.templates.pubNavBar);
          $('#site-navigation-bar').html( pubNavBar() );
        } else if (response.type == 'user') {
          console.log('this is a user')
          app.currentUser = response.user;
          app.currentUser.type = 'user'
          var userNavBar = Handlebars.compile(app.templates.userNavBar);
          $('#site-navigation-bar').html( userNavBar() );
        }
        var loggedInBar = Handlebars.compile(app.templates.loggedInBar);
        $('#login-functions').html( loggedInBar( app.currentUser ) );
          console.log(response)
          console.log(app.currentUser)
        }
      })

    // Send view to a users list
    app.router.navigate("users/list", true);
  }

});
