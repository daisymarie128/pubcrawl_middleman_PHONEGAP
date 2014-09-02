$(document).ready(function () {

  app.templates = {
    loginBar: $('#login-bar-template').html(),
    loggedInBar: $('#logged-in-bar-template').html(),
    userNavBar: $('#user-nav-bar-template').html(),
    pubNavBar: $('#pub-nav-bar-template').html(),
    userView: $('#user-template').html(),
    createPub: $('#create-pub-template').html(),
    usersListView: $('#users-list-template').html(),
    pubsListView: $('#pubs-list-template').html(),
    loginView: $('#login-template').html(),
    createPubChallengeView: $('#pub-challenge-template').html(),
    createTaskView: $('#new-task-template').html(),
    pubChallengesListView: $('#pub-challenge-list-template').html(),
    usersAchievementsView: $('#user-achievements-list-template').html(),
    findPubView: $('#find-pub-template').html()
  }


  app.users = new app.Users();
  var userRequest = app.users.fetch();

  app.pubs = new app.Pubs();
  var pubRequest = app.pubs.fetch();

  app.pubChallenges = new app.PubChallenges();
  var challengeRequest = app.pubChallenges.fetch();

  app.tasks = new app.Tasks();
  var taskRequest = app.tasks.fetch();


  $.when(userRequest, challengeRequest, pubRequest, taskRequest).done(function () {
    $.ajax('http://fierce-river-3029.herokuapp.com/current_user', {
      type: 'get',
      dataType: 'json',
      success: function(response){
        if (response.user){
          app.currentUser = response.user
          app.currentUser.type = response.type
          var loggedInBar = Handlebars.compile(app.templates.loggedInBar);
          console.log(app.currentUser)
          $('#login-functions').html( loggedInBar(app.currentUser) );
        }
        app.router = new app.Router();
        Backbone.history.start();
      }
      });
  });


  //Redirects to homepage when click on title.
  $('.title span').click(function(){
    window.location.replace("#");
  });
});
