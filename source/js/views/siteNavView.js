var app = app || {};

app.SiteNavView = Backbone.View.extend({
  el: '#site-navigation-bar',


  events: {

  },

  initialize: function () {
    // LET'S MAYBE HANG ONTO THIS VIEW HUH?
    // if (app.currentView) {
    //   app.currentView.remove();
    // }
    // app.currentView = this;
  },

  render: function () {
    if (app.currentUser && app.currentUser.type === 'pub'){
      console.log('is this workingggggg')
      var pubNavBar = Handlebars.compile(app.templates.pubNavBar);
      $('#site-navigation-bar').html( pubNavBar() );
    }else{
      var userNavBar = Handlebars.compile(app.templates.userNavBar);
      $('#site-navigation-bar').html( userNavBar() );
    }
  }
});
