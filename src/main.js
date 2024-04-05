{
    init: function(elevators, floors) {
        /* ELEVATORS */
        for (let i = 0; i < elevators.length; i++) {
            const elevator = elevators[i];

            // COPY AND PASTE FROM elevator-util HERE
            
            elevator.getHomeFloor = function(index, maxFloor) {
                return index % 2 ? maxFloor : 0
            }

            elevator.getOptimalQueue = function(queue, currentFloor) {
                if (queue.length < 2) {
                    return queue
                }
            
                let goingUp = queue[0] > currentFloor
                
                let upwardFloors = queue.filter(f => f > currentFloor)
                let downwardFloors = queue.filter(f => f < currentFloor)
                let doesCurrentFloorExist = queue.indexOf(currentFloor) > -1
            
                if (goingUp) {
                    const returnList = upwardFloors.sort().concat(downwardFloors.sort().reverse())
                    if (doesCurrentFloorExist) {
                        returnList.push(currentFloor)
                    }
                    return returnList
                } else {
                    const returnList = downwardFloors.sort().reverse().concat(upwardFloors)
                    if (doesCurrentFloorExist) {
                        returnList.push(currentFloor)
                    }
                    return returnList
                    
                }
            }

            elevators.getOptimalElevator = function(elevators, floorNum) {
                return elevators[0]
            }
            
            // END elevator-util FUNCTIONS
            
            elevator.on("idle", function() {
                elevator.goingUpIndicator(true)
                elevator.goingDownIndicator(true)

                let homeFloor = elevator.getHomeFloor(i, floors.length)
                elevator.goToFloor(homeFloor)

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
                console.log("Dest Queue before gotofloor", elevator.destinationQueue)
                elevator.goToFloor(floorNum)
                console.log("Dest Queue AFTER gotofloor", elevator.destinationQueue)
                elevator.destinationQueue = elevator.getOptimalQueue(elevator.destinationQueue, elevator.currentFloor)
                elevator.checkDestinationQueue()
                console.log("Dest Queue AFTER CHECK", elevator.destinationQueue)

            })

        }
        /* FLOORS */
        for (let i = 0; i < floors.length; i++) {
            const floor = floors[i];

            // COPY AND PASTE FROM floor-util HERE

            // END floor-util FUNCTIONS

            floor.on("up_button_pressed", function() {
                let floorNum = floor.floorNum()
                let bestChoice = elevators.getOptimalElevator(elevators, floorNum)
                bestChoice.goToFloor(floorNum)
            })

            floor.on("down_button_pressed", function() {
                let floorNum = floor.floorNum()
                let bestChoice = elevators.getOptimalElevator(elevators, floorNum)
                bestChoice.goToFloor(floorNum)
            })

        }

    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}