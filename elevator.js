{
    init: function(elevators, floors) {
        // all elevators with same algorithm currently
        
        for (let i = 0; i < elevators.length; i++) {
            const e = elevators[i];
            
            // Triggered when the elevator has completed all its tasks and is not doing anything.
            e.on("idle", function() {
                if (e.currentFloor() == 0) {
                    e.goToFloor(floors.length - i * 2)
                } else {
                    e.goToFloor(e.currentFloor() - 1)
                }
            });

            // Triggered when a passenger has pressed a button inside the elevator.	
            e.on("floor_button_pressed", function(floorNum) { 
                e.goToFloor(floorNum)
            });

            // Triggered slightly before the elevator will pass a floor. 
            // A good time to decide whether to stop at that floor. 
            // Note that this event is not triggered for the destination floor. Direction is either "up" or "down".	
            e.on("passing_floor", function(floorNum, direction) { 

            });

            // Triggered when the elevator has arrived at a floor.	
            e.on("stopped_at_floor", function(floorNum) {

            })
        };
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }

}
