var app = app || {};

app.PubChallengesCreateView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click #create-challenge': 'createPubChallenge',
    'click #add-task': 'addTask'
  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    var createPubChallengeView = Handlebars.compile(app.templates.createPubChallengeView);
    this.$el.html( createPubChallengeView );
    this.$el.attr('id', 'pub-challenge-view');
    $('#content').html(this.el);
  },

    //re fix this with form data. add the image cache to the model aswell
    createPubChallenge: function () {
      // stops the form from submitting params with the button.
      event.preventDefault();
      // saves to the rails database
      // have to do it this way for carrier wave
      var formData = new FormData();
        formData.append('pub_challenge[name]', $('#name').val());
        formData.append('pub_challenge[image]', $('.image')[0].files[0]);
        formData.append('pub_challenge[description]', $('#description').val());
        formData.append('pub_challenge[badge]', $('.badge')[0].files[0]);
        formData.append('pub_challenge[point-value]', $('#point-value').val());
        $.ajax({
          url: 'http://pubcrawlll.herokuapp.com/pub_challenges',
          data: formData,
          cache: false,
          contentType: false,
          processData: false,
          type: 'POST',
          success: function (){
            app.pubChallenges.fetch().done(function(){
              console.log('help meeeeee')
              app.router.navigate("tasks/create", true);
            })
          }
        })

  },

  addTask: function () {
    // stops the form from submitting params with the button.
    event.preventDefault();
    // saves to the rails database
    var addTask = Handlebars.compile(app.templates.addTask);
      $('#pub-challenge-view').append( addTask );
  }


});