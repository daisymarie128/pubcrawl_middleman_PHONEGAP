var app = app || {};

app.AppView = Backbone.View.extend({

  el: '#main',

  events: {
    // 'click': 'logout'
  },

  initialize: function () {

  },

  render: function () {

  },

  //
  createUser: function () {
    app.router.navigate("users/create", true);
  },

  createPub: function () {
    app.router.navigate("pubs/create", true);
  },

  createPubChallenge: function () {
    app.router.navigate("pub_challenges/create", true);
  }

  // logout: function (event) {
  //   console.log('sdfsdf');
  //   event.preventDefault();
  //   // i want this shit to just log the fuck out. why you no work!
  //   $.ajax('/session', {
  //     type: 'post',
  //     dataType: 'json',
  //     data: {
  //       _method: "delete"
  //     }
  //   }).done(function(){
  //     console.log('logging out and changing nav')
  //     var loginBar = Handlebars.compile(app.templates.loginBar);
  //     $('#user-bar').append( loginBar );
  //     app.router.navigate("", true);
  //     console.log('this should not happen')
  //   }).fail(function() {
  //     console.log('you failed');
  //   })
  // }

});

