angular.module('mapModule',[]).controller('mapController', function($scope) {
  var centerLatLng =  {lat: 0, lng: 0 };
  var map = new google.maps.Map(document.getElementById('map'), {
        center: centerLatLng,
        zoom: 3
      });

    $scope.map = map;
    // We should get all this static data through service.
    var vessels = [
      {
          lat: 0,
          lng: 0,
          name: "Vessel A"
      },
      {
          lat: 0,
          lng: 10,
          name: "Vessel B"
      },
      {
          lat: -45,
          lng: 0,
          name: "Vessel C"
      },
      {
          lat: 2,
          lng: 52,
          name: "Vessel D"
      },
      {
          lat: 12,
          lng: 50,
          name: "Vessel E"
      },
      {
          lat: 20,
          lng: 0,
          name: "Vessel F"
      },
  ];

   vessels.forEach(vessel => {
        var marker = new google.maps.Marker({
          position: {
            lat: vessel.lat,
            lng: vessel.lng
          },
          map: map
        });

        marker.addListener('click', function() {
        // We should call $apply to check the watches for changes in values.
          $scope.$apply(function() {
              $scope.selectedVessel = vessel;
              console.log($scope.selectedVessel);
          });
        });
      }); 

      $scope.penTo = function(name,value) {
        console.log('value is: ',name, value);
          let latLng = new google.maps.LatLng(value.lat, value.lng);
          
          $scope.map.panTo(latLng);
          $scope.map.zoom = 6;
      };
  }
);
