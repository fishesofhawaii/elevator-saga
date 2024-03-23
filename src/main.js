{
    init: function(elevators, floors) {
        for (let i = 0; i < elevators.length; i++) {
            const elevator = elevators[i];

            elevator.on("idle", function() {
                
            })            

            elevator.on("floor_button_pressed", function(floorNum) {
                
            })

        }
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}