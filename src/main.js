{
    init: function(elevators, floors) {
        /* ELEVATORS */
        for (let i = 0; i < elevators.length; i++) {
            const elevator = elevators[i];

            // COPY AND PASTE FROM elevator-util HERE
            
            elevator.getHomeFloor = function(index, maxFloor) {
                return index % 2 ? maxFloor : 0
            }

            // END elevator-util FUNCTIONS
            
            elevator.on("idle", function() {
                let homeFloor = elevator.getHomeFloor(i, floors.length)
                elevator.goToFloor(homeFloor)

                if (elevator.currentFloor() == homeFloor) {
                    elevator.goingUpIndicator(true)
                    elevator.goingDownIndicator(true)
                }
            })

            elevator.on("stopped_at_floor", function(floorNum) {
                const nextFloor = elevator.destinationQueue[0]

                if (nextFloor == undefined) {
                    // Will fire 'idle' behavior
                } else if (nextFloor > floorNum) {
                    elevator.goingDownIndicator(false)
                    elevator.goingUpIndicator(true)
                } else if (nextFloor < floorNum) {
                    elevator.goingUpIndicator(false)
                    elevator.goingDownIndicator(true)
                } else {
                    console.log("TODO: Fix unforseen stopped_at_floor behavior", nextFloor)
                }
            })

            elevator.on("floor_button_pressed", function(floorNum) {
                elevator.goToFloor(floorNum)
            })

        }
        /* FLOORS */
        for (let i = 0; i < floors.length; i++) {
            const floor = floors[i];

            // COPY AND PASTE FROM floor-util HERE

            // END floor-util FUNCTIONS

            floor.on("up_button_pressed", function() {
                
            })

            floor.on("down_button_pressed", function() {

            })

        }

    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}