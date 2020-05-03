function VesselListController($scope) {
     // We should get all this static data through service.
    this.vessels = [
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

    // Resister an output methods in onInit lifecycle hook
    // This is another way to notify parent , if we want to do some logic in child component.
    // Or we can even use the $boardcast to emit the object value.
    // this.$onInit = function() {
    //     this.selected({
    //       handler: this.penToMarker
    //     });
    //   };

    // $scope.penToMarker = function(e) {
    //   console.log(e);
    // };
  }
  
  angular.module('mapModule').component('vesselList', {
       template : `<div class="vessel-list-item" ng-repeat="vessel in $ctrl.vessels">
                    <div >
                    <a ng-click="$ctrl.onSelected({value: vessel})">{{vessel.name}} </a>
                    </div>
                </div>`,
    controller: VesselListController,
    bindings: {
        onSelected : '&'  
    }
  });