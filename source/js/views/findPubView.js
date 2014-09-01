var app = app || {};

app.FindPubView = Backbone.View.extend({
  tagName: 'div',

  events: {
  },

  initialize: function () {
    if (app.currentView) {
      app.currentView.remove();
    }
    app.currentView = this;
  },

  render: function () {
    // var findPubView = Handlebars.compile();
    console.log('rendering find pub')
    this.$el.html( app.templates.findPubView );
    this.$el.attr('id', 'find-pub-view');
    $('#content').html(this.el);
    this.display_map(-33.87, 151.21, 12);

  },

  display_map: function (lat, lng, zoom) {
    var mapOptions = {
      center: new google.maps.LatLng(lat, lng),
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#E8C53A"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#FFFFFF"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]}]
    };

    var canvas = $('#map_canvas').get(0);

    var map = new google.maps.Map(canvas, mapOptions);
    var geocoder = new google.maps.Geocoder();

    var pubLatLng;

    var pubView = this;

    app.pubs.fetch().done(function(){
      app.pubs.each( function(pub){
        geocoder.geocode({
          'address': pub.get('address')
          }, function(results, status) {
              pubLatLng = new google.maps.LatLng(results[0].geometry.location.lat() , results[0].geometry.location.lng() )
              pubView.addMarker(pubLatLng, map)
        })
      })

    });


  },
  addMarker: function(position, map) {
    new google.maps.Marker({
          position: position,
          map: map,
          animation: google.maps.Animation.DROP,
          title: 'Click to zoom'
        })

  }

});