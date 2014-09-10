var app = app || {};

app.LoginView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click button': 'login'
  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    var loginView = Handlebars.compile(app.templates.loginView);
    this.$el.html( loginView );
    this.$el.attr('id', 'login-view');
    $('#content').html(this.el);
  },

  login: function (event) {
    // stops the form from submitting params with the button.
    event.preventDefault();
    // saves to the rails database
    $.ajax('http://pubcrawlll.herokuapp.com/session', {
      type: 'post',
      dataType: 'json',
      data: {
        username: $('#username').val(),
        password: $('#password').val()
      },
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      success: function(response) {
        console.log('login got', response);
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
        } else {
          alert('Invalid login');
          return;
        }
        var loggedInBar = Handlebars.compile(app.templates.loggedInBar);
        $('#login-functions').html( loggedInBar( app.currentUser ) );

        // var pubNavBar = Handlebars.compile(app.templates.pubNavBar);
        // $('#site-navigation-bar').html( pubNavBar() );
        app.router.navigate("users/list", true);

      },
      complete: function(response, string){
        console.log( "request done" )
      }
    })
    // if (sign in is right){
    //   app.router.navigate("users/list", true);
    // }else{
    //   alert('your a fucking idiot')
    // }
    // var userLogin = new app.Session({
    //   username: $('#username').val(),
    //   password: $('#password').val()});
    // userLogin.save();
    // // adds to the backbone memory (browser)
    // //i dont know what should actually go here!
    // // app.users.add(newUser);
    // // Send view to a users list
    // app.router.navigate("users/list", true);
  }

});