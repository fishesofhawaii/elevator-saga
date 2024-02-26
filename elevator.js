{
    init: function(elevators, floors) {

        elevators.forEach(e => {
            e.on("idle", function() {
                e.goToFloor(e.currentFloor() - 1)
            });
    
            e.on("floor_button_pressed", function(floorNum) { 
                e.goToFloor(floorNum)
            });
    
        });
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}