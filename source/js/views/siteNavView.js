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

    $('#readqr').on('click', function(){
      console.log('reading qr')
      cordova.plugins.barcodeScanner.scan(
        function (result) {
          $('#content').html("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
        },
        function (error) {
          $('#content').html("Scanning failed: " + error);
        }
       );
    });

    $('#makeqr').on('click', function(){
      var str = prompt( "Enter text:" )
      cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, str, function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          }
      );
    });
  }
});
