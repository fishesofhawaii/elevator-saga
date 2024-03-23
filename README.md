# elevator-saga


`npm run test`
* elevator.js
* floor.js


Learnings (even if trivial)
* Floor 0 can't go down
* Floor (max) can't go up
* Load factor 1.0 is Max, but it's rare to see this. 0.775, 0.825 might be load factors that are full as well
* You need to "go to floor" in order to stop (or explicitly call stop)
* Challenge 10, 2 elevators, one is big
* A lot of times... if people are going down, they're going to the bottom floor, same can't be said for up

# Helpful APIs

## Elevator Object

```javascript
// Triggered when the elevator has completed all its tasks and is not doing anything.
elevator.on("idle", function() {

})
```

```javascript
// Triggered when a passenger has pressed a button inside the elevator.	
elevator.on("floor_button_pressed", function(floorNum) {

});
```

```javascript
// Triggered slightly before the elevator will pass a floor. 
// A good time to decide whether to stop at that floor. 
// Note that this event is not triggered for the destination floor. Direction is either "up" or "down".	
elevator.on("passing_floor", function(floorNum, direction) { 

})
```

```javascript
// Triggered when the elevator has arrived at a floor.	
elevator.on("stopped_at_floor", function(floorNum) {

})
```


## Floor Object

```javascript
// Triggered when someone has pressed the up button at a floor. Note that passengers will press the button again if they fail to enter an elevator.
floor.on("up_button_pressed", function() {

})
```

```javascript
// Triggered when someone has pressed the down button at a floor. Note that passengers will press the button again if they fail to enter an elevator.	
floor.on("down_button_pressed", function() {
    floorLights[-i] = true
})
```

```javascript
// Has value of `activated`, or ``
floor.buttonStates.up
floor.buttonStates.down
```
