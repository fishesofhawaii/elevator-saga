function getHomeFloor(index, maxFloor) {
    return index % 2 ? maxFloor : 0
}

module.exports = {getHomeFloor};