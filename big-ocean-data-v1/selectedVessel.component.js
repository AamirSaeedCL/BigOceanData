angular.module("mapModule").component("selectedVessel", {
    template : `<div ng-if="!$ctrl.vessel"> No Vessel Selected</div>
                <div ng-if="$ctrl.vessel">  Selected Vessel : {{$ctrl.vessel.name}}</div>
               `,
     bindings: {  
        vessel: '<'  // We need one-way binding!
     },
    controller: [function(){} 
    ]
});