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
            
            e.on("idle", function() {
                e.goingDownIndicator(true)
                e.goingUpIndicator(true)

                if (floorLights[e.currentFloor()] || floorLights[-e.currentFloor()]) {
                    // if the light is on for the given floor -- let people load 
                    e.goToFloor(e.currentFloor(), true)

                } // but only briefly -- fallthrough

                if (e.currentFloor() == 0) {
                    e.goToFloor(floors.length - 1)
                    e.goingDownIndicator(false)
                } else if (e.currentFloor() == floors.length - 1) {
                    e.goToFloor(0)
                    e.goingUpIndicator(false)
                }
            });

            e.on("floor_button_pressed", function(floorNum) {
                if (elevatorLights[i] == undefined) {
                    elevatorLights[i] = new Map()
                }
                elevatorLights[i][floorNum] = true
            });

            e.on("passing_floor", function(floorNum, direction) { 
                // While passing, check potential destinations
                if (elevatorLights[i] != undefined && elevatorLights[i][floorNum]) {
                    e.goToFloor(floorNum, true)
                    elevatorLights[i][floorNum] = false
                }
                                
                if (e.loadFactor() < 0.72) {
                    if (direction == "up" && floorLights[floorNum]) {
                        e.goToFloor(floorNum, true)
                        floorLights[-floorNum] = true
                    } else if (direction == "down" && floorLights[-floorNum]) {
                        e.goToFloor(floorNum, true)
                        floorLights[-floorNum] = false
                    } else {
                        // Do nothing
                    }
                } else {
                    // Do nothing
                }
            });

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
