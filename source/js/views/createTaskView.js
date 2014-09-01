var app = app || {};

app.TaskCreateView = Backbone.View.extend({
  tagName: 'div',

  events: {
    'click button': 'createTask'
  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    var taskView = Handlebars.compile(app.templates.createTaskView);
    this.$el.html( taskView );
    this.$el.attr('id', 'task-view');
    $('#content').html(this.el);
  },

  createTask: function () {
    var newTask = new app.Task({
      task: $('.task').val()
    });
    newTask.save();
    console.log('task saving')
    app.pubChallenges.fetch().done(function(){
      console.log('navigating to challegnges list')
      app.router.navigate("pub_challenges/list", true);
    })
  }
})