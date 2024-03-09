{
    init: function(elevators, floors) {
        /*
        {
            -5: true,       // 5th floor, DOWN  indicator ON
            -3: false,      // 3rd floor, DOWN  indicator OFF
            3: undefined    // 3rd floor, UP    indicator OFF
            1: false,       // 1st floor, UP    indicator ON
        }
        */
        const floorLights = {}
        const elevatorLights = {}

        for (let i = 0; i < elevators.length; i++) {
            const e = elevators[i]
            
            // Triggered when the elevator has completed all its tasks and is not doing anything.
            e.on("idle", function() {
                // If on bottom, go to top and put down indicator
                e.goingDownIndicator(true)
                e.goingUpIndicator(true)

                if (floorLights[e.currentFloor()] || floorLights[-e.currentFloor()]) {
                    // if the light is on for the given floor -- let people load 
                    e.goToFloor(e.currentFloor(), true)

                } // but only briefly -- fallthrough

                if (e.currentFloor() == 0) {
                    e.goToFloor(floors.length)
                    e.goingDownIndicator(false)
                } else if (e.currentFloor() == floors.length - 1) {
                    // If on top, go to bottom and put up indicator
                    e.goToFloor(0)
                    e.goingUpIndicator(false)
                }
            });

            // Triggered when a passenger has pressed a button inside the elevator.	
            e.on("floor_button_pressed", function(floorNum) { 
                if (elevatorLights[i] == undefined) {
                    elevatorLights[i] = new Map()
                }
                elevatorLights[i][floorNum] = true
            });

            // Triggered slightly before the elevator will pass a floor. 
            // A good time to decide whether to stop at that floor. 
            // Note that this event is not triggered for the destination floor. Direction is either "up" or "down".	
            e.on("passing_floor", function(floorNum, direction) { 
                // DESTINATION QUEUE CHECK
                if (elevatorLights[i] != undefined && elevatorLights[i][floorNum]) {
                    e.goToFloor(floorNum, true)
                    elevatorLights[i][floorNum] = false
                }
                                
                // If direction is matching, and there is room, let's pick em up
                // LoadFactor isn't an exact measurement, .75 should pretty much be full (otherwise we might stop and cant fit them)
                if (e.loadFactor() < 0.75) {
                    if (direction == "up" && floorLights[floorNum]) {
                        e.goToFloor(floorNum, true)
                        floorLights[-floorNum] = true
                    } else if (direction == "down" && floorLights[-floorNum]) {
                        e.goToFloor(floorNum, true)
                        floorLights[-floorNum] = false
                    } else {
                        // if it's not... f'em (forget-em)
                    }
                }
            });

            // Triggered when the elevator has arrived at a floor.	
            e.on("stopped_at_floor", function(floorNum) {

            })
        };

        for (let i = 0; i < floors.length; i++) {
            const f = floors[i]

            f.on("up_button_pressed", function() {
                floorLights[i] = true
            })

            f.on("down_button_pressed", function() {
                floorLights[-i] = true
            })

        }
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
