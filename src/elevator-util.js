function getHomeFloor(index, maxFloor) {
    return index % 2 ? maxFloor : 0
}

function getOptimalQueue(queue, currentFloor) {
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

function getOptimalElevator(elevators, floorNum) {
    return elevators[0]
}


module.exports = {getHomeFloor, getOptimalQueue, getOptimalElevator};